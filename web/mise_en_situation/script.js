let mes = [];
let currentMes = 0;
let score = 0;

window.addEventListener('load', () => {
    mes = document.querySelectorAll('.mes');
    displayCurrentMes();
})

function displayCurrentMes() {
    mes.forEach(m => m.classList.remove('mes-show'));
    mes[currentMes].classList.add('mes-show');
}

function verify(response, correct){
    if(response == correct){
        displayCorrect();
        score++;
    } else {
        displayError();
    }
}

function displayCorrect(){
    document.querySelector('.mes-good').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.mes-good').style.display = 'none';
        nextMes();
    }, 2000)
}

function displayError(){
    document.querySelector('.mes-bad').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.mes-bad').style.display = 'none';
        nextMes();
    }, 2000)
}

function nextMes() {
    currentMes++;
    console.log(currentMes);
    if (currentMes < mes.length) {
        displayCurrentMes();
    } else {
        displayFinish();
    }
}

function displayFinish() {
    window.location = "./finish.html?score=" + score;
}