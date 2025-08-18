const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const squares = document.querySelectorAll('.square');

const nextStep = document.getElementById('next-step');
const prevStep = document.getElementById('prev-step');
const steps = document.querySelectorAll('.step');

const nextCircle = document.getElementById('next-circle');
const prevCircle = document.getElementById('prev-circle');
const circle = document.getElementById('circle');
const value = document.getElementById('value');

const nextLine = document.getElementById('next-line');
const prevLine = document.getElementById('prev-line');
const line = document.getElementById('line');


let currentActive = 1;
let stepActive = 1;
let circleActive = 0 ;
let lineActive = 0 ;

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

function updateCircle(){
    circle.style.background = 
    `conic-gradient(var(--fill-circle-bg) 0% ${circleActive}%,var(--empty-circle-bg) ${circleActive}% 100%)`;
    value.textContent = `${circleActive}%`;

    prevCircle.disabled = circleActive === 0 ;
    nextCircle.disabled = circleActive === 100 ;
}

nextCircle.addEventListener('click',() => {
    if(circleActive < 100){
        circleActive +=20;

        updateCircle();
    }
});

prevCircle.addEventListener('click',() => {
    if(circleActive > 0){
        circleActive -=20;

        updateCircle();
    }
});

nextLine.addEventListener('click',() => {
    lineActive = Math.min(100,lineActive+20);
    line.style.setProperty('--p',lineActive);

    nextLine.disabled = lineActive === 100;
    prevLine.disabled = lineActive === 0;
});

prevLine.addEventListener('click',() => {
    lineActive = Math.max(0,lineActive-20);
    line.style.setProperty('--p',lineActive);

    prevLine.disabled = lineActive === 0;
    nextLine.disabled = lineActive === 100;
});