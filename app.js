const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const squares = document.querySelectorAll('.square');

 let currentActive = 1 ;

next.addEventListener('click',() => {
    currentActive++;
    if(currentActive > squares.length){
        currentActive = squares.length ;
    }
    update();
} );

prev.addEventListener('click',() => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1 ;
    }
    update();
} );

function update(){
    squares.forEach((square,idx) => {
        if(currentActive > idx){
            square.classList.add('active');
        }else{
            square.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1)/
    (squares.length - 1)*100 +`%`;

    if(currentActive === 1){
        prev.disabled = true;
    }else if (currentActive === squares.length){
        next.disabled = true ;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}