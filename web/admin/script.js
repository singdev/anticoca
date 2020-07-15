let _quiz = [];
//const url = "https://service.anticoca.com/";
const url = "http://127.0.0.1:3000";

window.addEventListener('load', async () => {
    _quiz = await fetchQuiz();
    if(_quiz.a){
      displayQuiz('.quiz_a', _quiz.a);
    }
    if(_quiz.b){
      displayQuiz('.quiz_b', _quiz.b);
    }
    const l1 = _quiz.a ? _quiz.a.length : 0;
    const l2 = _quiz.b ? _quiz.b.length : 0;
    document.querySelector('.participant').innerHTML = (l1 + l2) + " Participants";
})


async function fetchQuiz() {
    const res = await fetch(url+"/quiz");
    if (res.status == 200) {
        const data = await res.json();
        console.log(data);
        const a = [];
        data.a.forEach(da => {
          a.push(JSON.parse(da));
        })
        const b = [];
        data.b.forEach(db => {
          b.push(JSON.parse(db));
        })
        return { a, b };
    }
    return null;
}

function displayQuiz(classe, quizzes) {
    const container = document.querySelector(classe);
    const section = document.querySelector('.display');
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    let i = 1;
    quizzes.forEach(quiz => {
        if (quiz && quiz[0]) {
            const a = document.createElement('a');
            a.href = "#";
            a.innerHTML = i++;
            a.addEventListener('click', () => {
                while(section.firstChild){
                    section.removeChild(section.firstChild);
                }
                const p = document.createElement('p');
                p.innerHTML = (i-1);
                p.classList.add("number");
                console.log(quiz);
                quiz.forEach(q => {
                    let str = "";
                    q.checked.forEach(qc => {
                        str = str + `<p class="value">${qc}</p>`;
                    })
                    const template = `
                      <p class="question">${q.question}</p>
                      ${str}
                    `;
                    const div = document.createElement('div');
                    div.innerHTML = template;
                    section.appendChild(div);
                })
            })
            container.appendChild(a);
        }
    })
}
