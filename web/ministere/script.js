let _plaintes = [];
const url = "https://service.anticoca.com/";
//const url = "http://127.0.0.1:3000";

window.addEventListener('load', async () => {
    document.querySelector('.identite-img').style.display = 'none';
    document.querySelector('.identite-a').style.display = 'none';
    _plaintes = await fetchPlainte();
    if (_plaintes) {
        displayPlaintes(_plaintes);
    }
    const l1 = _plaintes.length;
    document.querySelector('.participant').innerHTML = "" + l1 + " Plainte" + (l1 > 1 ? "s" : "");
})

async function fetchPlainte() {
    const res = await fetch(url + "/plainte");
    if (res.status == 200) {
        const data = await res.json();
        return data;
    }
    return null;
}

function displayPlaintes(plaintes) {
    const container = document.querySelector(".plaintes");
    const section = document.querySelector('.display');

    let i = 1;
    plaintes.forEach(plainte => {
        if (plainte) {
            const a = document.createElement('a');
            a.href = "#";
            a.innerHTML = i++;
            a.addEventListener('click', () => {
                document.querySelector('.nom').innerHTML = plainte.nom;
                document.querySelector('.tel').innerHTML = plainte.tel;
                document.querySelector('.details').innerHTML = plainte.details;
                if (plainte.identite.mimetype.includes('image')) {
                    document.querySelector('.identite-img').style.display = 'block';
                    document.querySelector('.identite-a').style.display = 'block';
                    if (plainte.identite.filename) {
                        document.querySelector('.identite-img').src = url + "/plainte/file/" + plainte.identite.filename;
                        document.querySelector('.identite-a').setAttribute('href', url + "/plainte/file/" + plainte.identite.filename);
                    } else {
                        document.querySelector('.identite-img').style.display = 'none';
                        document.querySelector('.identite-a').style.display = 'none';
                    }
                } else {
                    document.querySelector('.identite-img').style.display = 'none';
                    document.querySelector('.identite-a').setAttribute('href', url + "/plainte/file/" + plainte.identite.filename);
                }

                const dcontainer = document.querySelector('.documents');
                while (dcontainer.firstChild) {
                    dcontainer.removeChild(dcontainer.firstChild);
                }
                plainte.documents.forEach(doc => {
                    const a = document.createElement('a');
                    a.setAttribute('href', url + "/plainte/file/" + doc.filename);
                    a.innerHTML = "Télécharger";
                    console.log(doc.mimetype);
                    if (doc.mimetype.includes('video')) {
                        const div2 = document.createElement('div')
                        div2.innerHTML = `
                        <video width="320" height="240" controls>
  <source src="${url + "/plainte/file/" + doc.filename}" type="${doc.mimetype}">
Votre navigateur ne supporte la lecture de vidép
</video>`;
                        const div = document.createElement('div');
                        div.appendChild(div2);
                        div.appendChild(a);
                        dcontainer.appendChild(div);
                    } else if (doc.mimetype.includes('image')) {
                        const img = document.createElement('img');
                        img.src = url + "/plainte/file/" + doc.filename;
                        const div = document.createElement('div');
                        div.appendChild(img);
                        div.appendChild(a);
                        dcontainer.appendChild(div);
                    } else {
                        dcontainer.appendChild(a);
                    }
                })
            })
            container.appendChild(a);
        }
    })
}

