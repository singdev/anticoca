let _content = [];
let _step = [];
let currentIndex = 0;
let identite = null;
const documents = [];

//const url = "https://service.anticoca.com/";
const url = "http://127.0.0.1:3000";

window.addEventListener('load', () => {
    _content = document.querySelectorAll('.content');
    _step = document.querySelectorAll('.step');
    displayCurrentIndex();
})

function displayCurrentIndex() {
    _content.forEach(c => {
        c.classList.remove("current-content");
    })
    _step.forEach(s => {
        s.classList.remove('current-step');
    })
    _step[currentIndex].classList.add("current-step");
    _content[currentIndex].classList.add("current-content");
}

function next() {
    if(currentIndex == 1){
        postPlainte();
    }
    currentIndex++;
    if (currentIndex >= _content.length) {
        currentIndex = _content.length - 1;
    }
    displayCurrentIndex();
}

function loadIdentiteFile(e) {
    if (e.files[0]) {
        identite = e.files[0];
    }
}

function addDocument() {
    const container = document.querySelector('.attachments');
    const input = document.createElement('input');
    input.type = 'file';
    input.name = 'document';
    input.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            documents.push(e.target.files[0]);
        }
    })
    container.appendChild(input);
}

async function postPlainte() {
    const nom = document.querySelector("input[name='nom']").value;
    const tel = document.querySelector("input[name='tel']").value;
    const details = document.querySelector("textarea[name='details']").value;

    const formData = new FormData();

    formData.append('nom', nom);
    formData.append('tel', tel);
    formData.append('details', details);
    if (identite) {
        formData.append('identite', identite);
    }
    documents.forEach(d => {
        formData.append('documents', d);
    })

    const res = await fetch(url+"/plainte",{
        method: 'post',
        body: formData
    });
    console.log(res.status);
    if(res.status != 200){
        alert("Votre requête n'a pas été envoyé")
    }
}