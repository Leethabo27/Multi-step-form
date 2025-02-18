
const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const backBtns = document.querySelectorAll('.back-btn');
const form = document.getElementById('multi-step-form');
const summary = document.getElementById('summary');

let currentStep = 0;


steps[currentStep].classList.add('active');


function showStep(step) {
    steps.forEach((el, index) => {
        el.classList.remove('active');
        if (index === step) {
            el.classList.add('active');
        }
    });
}


nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const inputs = steps[index].querySelectorAll('input');
        let valid = true;
        
        
        inputs.forEach(input => {
            if (!input.value && input.required) {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (valid) {
            currentStep++;
            showStep(currentStep);
            if (currentStep === 2) {
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const plan = document.querySelector('input[name="plan"]:checked')?.value || 'None';
                summary.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Plan: ${plan}</p>`;
            }
        }
    });
});


backBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
