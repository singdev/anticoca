let _content = [];
let _step = [];
let currentIndex = 0;
let identite = null;
let anonyme = false;
const documents = [];

const url = "https://admin.stopcorruption.ga";
//const url = "http://127.0.0.1:3000";

const villes = [
    "Cocobeach",
    "Kango",
    "Libreville",
    "Nkan",
    "Ntoum",
    "Franceville",
    "Lékoni",
    "Moanda",
    "Mounana",
    "Okondja",
    "Lambaréné",
    "Ndjolé",
    "Fougamou",
    "Mbigou",
    "Mimongo",
    "Mimongo",
    "Mouila",
    "Ndendé",
    "Mayumba",
    "Tchibanga",
    "Tsogni",
    "Booué",
    "Makokou",
    "Mékambo",
    "Koulamoutou",
    "Lastourville",
    "Gamba",
    "Omboué",
    "Port-Gentil",
    "Bitam",
    "Medouneu",
    "Minvoul",
    "Mitzic",
    "Oyem",
];

window.addEventListener('load', () => {
    _content = document.querySelectorAll('.content');
    _step = document.querySelectorAll('.step');
    displayCurrentIndex();
    laodVilles();
})

function showModal(){
    document.querySelector('.modal').classList.add("show-modal");
}

function hideModal(){
    document.querySelector('.modal').classList.remove("show-modal");
}

function laodVilles() {
    const select = document.querySelector('select[name="ville"]');

    const sorted = villes.sort((a, b) =>
        a.localeCompare(b));

    sorted.forEach(ville => {
        const option = document.createElement('option');
        option.value = ville;
        option.innerHTML = ville;
        select.appendChild(option);
    })
}

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

async function next(value) {
    let warning = false;
    document.querySelector('.waiting').innerHTML = "";

    if (currentIndex == 1) {
        if (document.querySelector('input[name="email"]').value != "" &&
            !validateEmail(document.querySelector('input[name="email"]').value)) {
            warning = true;
            alert("L'adresse email est incorrecte");
        }
    }
    if (currentIndex == 2) {
        if (document.querySelector('input[name="administration"]').value == "") {
            alert("L'administration concernée est obligatoire");
            warning = true;
        } else {
            showModal();
            document.querySelector('.waiting').innerHTML = '<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>  <span>Veuilez patienter...</span>';
            try {
                await postPlainte();
            } catch(err){
                console.log(err);
            }
            hideModal();
            document.querySelector('.waiting').innerHTML = "";
        }
    }
    if (value == 'jump') {
        anonyme = true;
        currentIndex += 2;
    } else {
        if (!warning) {
            currentIndex++;
        }
    }
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
    const nom = normalize(document.querySelector("input[name='nom']").value);
    const tel = normalize(document.querySelector("input[name='tel']").value);
    const details = normalize(document.querySelector("textarea[name='details']").value);
    const prenom = normalize(document.querySelector("input[name='prenom']").value);
    const email = normalize(document.querySelector("input[name='email']").value);
    const ville = normalize(document.querySelector("select[name='ville']").value);
    const administration = normalize(document.querySelector("input[name='administration']").value);

    const formData = new FormData();

    formData.append('administration', administration);
    formData.append('anonyme', anonyme);
    formData.append('nom', nom);
    formData.append('tel', tel);
    formData.append('prenom', prenom);
    formData.append('email', email);
    formData.append('details', details);
    formData.append('ville', ville);
    if (identite) {
        formData.append('identite', identite);
    }
    console.log(formData.toString());
    documents.forEach(d => {
        formData.append('documents', d);
    })

    const result = await publish(formData, document.querySelector('.waiting'));
}

/**
 * 
 * @param {String} str 
 */
function normalize(str) {
    return str.replace(/\r?\n|\r/g, '').replace(/\'/, "\\\'").replace(/\"/, "\\\"");
}

async function publish(data, progressElement) {

    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();

        // AJAX request finished
        request.addEventListener('load', (e) => {
            // request.response will hold the response from the server
            progressElement.innerHTML = "";
            document.querySelector('.numero').innerHTML = request.response.numero;
            resolve(request.response);
        });

        // Upload progress on request.upload
        request.upload.addEventListener('progress', (e) => {
            var percent_complete = (e.loaded / e.total) * 100;
            // Percentage of upload completed
            progressElement.innerHTML = Math.round(percent_complete) + "%";
        });

        // If server is sending a JSON response then set JSON response type
        request.responseType = 'json';

        // Send POST request to the server side script
        request.open('post', url + "/api/plainte", );
        request.send(data);
    })
}

function printPage(){
  window.print();
}

async function displayStep() {
    const numero = document.querySelector("input[name='numero']").value;

    res = await fetch(url + "/api/plainte/" + numero);

    if (res.status == 200) {
        const plainte = await res.json();
        console.log(plainte);
        let str = "";
        if (plainte.decision) {
            if (plainte.decision == "poursuivre") {
                str = "Dossier poursuivi";
            } else {
                str = "Dossier clôturé";
            }
        } else if (plainte.etat == ">Ouverture") {
            str = "En attente d'ouverture";
        } else if (plainte.etat == ">Qualification") {
            str = "En cours de traitement";
        }
        document.querySelector('.etape').innerHTML = str;
    } else {
        document.querySelector('.etape').innerHTML = "Oups! veuillez réessayer s'il vous plaît";
        console.log("Error");
    }
}