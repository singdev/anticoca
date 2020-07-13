let _quiz = [];

window.addEventListener('load', async () => {
    _quiz = await fetchQuiz();
    console.log(_quiz);
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

function loadQuiz(d){
  let a = [];
  JSON.parse(d).forEach(e => {
            try {
                a.push(JSON.parse(e));
            } catch (err) { }
  })
  return a;
}

async function fetchQuiz() {
    const res = await fetch("https://service.anticoca.com/quiz");
    if (res.status == 200) {
        const d = await res.json();
        let a = null;
        let b = null;
        if(d.a){
          a = loadQuiz(d.a);
        }
        if(d.b){
          b = loadQuiz(d.b);
        }
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
