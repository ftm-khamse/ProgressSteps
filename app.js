const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const squares = document.querySelectorAll('.square');

const nextStep = document.getElementById('next-step');
const prevStep = document.getElementById('prev-step');
const steps = document.querySelectorAll('.step');

let currentActive = 1;
let stepActive = 1;

function updateUI({ elements, activeIndex, activeClass, progressBar, prevBtn, nextBtn }) {
    elements.forEach((el, idx) => {
        el.classList.toggle(activeClass, activeIndex > idx);
    });

    if (progressBar) {
        const activeCount = document.querySelectorAll(`.${activeClass}`).length;
        progressBar.style.width = ((activeCount - 1) / (elements.length - 1)) * 100 + '%';
    }

    prevBtn.disabled = activeIndex === 1;
    nextBtn.disabled = activeIndex === elements.length;
}

next.addEventListener('click', () => {
    currentActive = Math.min(currentActive + 1, squares.length);
    updateUI({
        elements: squares,
        activeIndex: currentActive,
        activeClass: 'active',
        progressBar: progress,
        prevBtn: prev,
        nextBtn: next
    });
});

prev.addEventListener('click', () => {
    currentActive = Math.max(currentActive - 1, 1);
    updateUI({
        elements: squares,
        activeIndex: currentActive,
        activeClass: 'active',
        progressBar: progress,
        prevBtn: prev,
        nextBtn: next
    });
});

nextStep.addEventListener('click', () => {
    stepActive = Math.min(stepActive + 1, steps.length);
    updateUI({
        elements: steps,
        activeIndex: stepActive,
        activeClass: 'active-step',
        progressBar: null,
        prevBtn: prevStep,
        nextBtn: nextStep
    });
});

prevStep.addEventListener('click', () => {
    stepActive = Math.max(stepActive - 1, 1);
    updateUI({
        elements: steps,
        activeIndex: stepActive,
        activeClass: 'active-step',
        progressBar: null,
        prevBtn: prevStep,
        nextBtn: nextStep
    });
});