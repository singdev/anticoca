let _content = [];
let _step = [];
let currentIndex = 0;

window.addEventListener('load', () => {
    _content = document.querySelectorAll('.content');
    _step = document.querySelectorAll('.step');
    displayCurrentIndex();
})

function displayCurrentIndex(){
    _content.forEach(c => {
        c.classList.remove("current-content");
    })
    _step.forEach(s => {
        s.classList.remove('current-step');
    })
    _step[currentIndex].classList.add("current-step");
    _content[currentIndex].classList.add("current-content");
}

function next(){
    currentIndex++;
    if(currentIndex >= _content.length){
        currentIndex = _content.length-1;
    }
    displayCurrentIndex();
}