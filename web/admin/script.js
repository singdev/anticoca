let _quiz = [];

window.addEventListener('load', async () => {
    _quiz = await fetchQuiz();
    console.log(_quiz);
    displayQuiz('.quiz_a', _quiz.a);
    displayQuiz('.quiz_b', _quiz.b);
    document.querySelector('.participant').innerHTML = (_quiz.a.length + _quiz.b.length) + " Participants";
})

async function fetchQuiz() {
    const res = await fetch("http://localhost:3000/quiz");
    if (res.status == 200) {
        const d = await res.json();
        const a = [];
        JSON.parse(d.a).forEach(e => {
            try {
                a.push(JSON.parse(e));
            } catch (err) { }
        })
        const b = [];
        JSON.parse(d.b).forEach(e => {
            try {
                b.push(JSON.parse(e));
            } catch (err) { }
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