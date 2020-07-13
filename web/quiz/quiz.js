let _questions = [];
let _currentQuestion = 0;

window.addEventListener('load', () => {
    _questions = getAllQuestions();
    showCurrentQuestion();
})

function getAllQuestions() {
    return document.querySelectorAll('.question');
}

function showCurrentQuestion() {
    _questions.forEach(q => {
        q.classList.remove('current-question');
    })
    _questions[_currentQuestion].classList.add('current-question');
}

function nextQuestion() {
    const props = _questions[_currentQuestion].querySelector('.propositions');
    if (props && props.classList.contains('show-propositions') == false) {
        const prop = _questions[_currentQuestion].querySelector('.responses input[value="prop"]');
        if (prop.checked == true) {
            console.log('add props');
            props.classList.add('show-propositions');
        } else {
            performNext();
        }
    } else {
        performNext();
    }
}

function performNext() {
    _currentQuestion++;
    if (_currentQuestion >= _questions.length) {
        _currentQuestion--;
        finish();
    }
    showCurrentQuestion();
}

function previousQuestion() {
    _currentQuestion--;
    if (_currentQuestion < 0) {
        _currentQuestion = 0;
    }
    showCurrentQuestion();
}

async function finish() {
    //TODO
    postQuiz();
}

async function postQuiz() {
    const type = document.querySelector('.title').innerHTML;
    let version = null;
    if (type.includes('Quiz A')) {
        version = 'a';
    } else if (type.includes('Quiz B')) {
        version = 'b';
    }
    let quiz = [];
    _questions.forEach(q => {
        const question = q.querySelector('h1').innerHTML;
        const formGroups = q.querySelectorAll('.form-group');
        let checked = [];
        formGroups.forEach(fg => {
            if (fg.querySelector('input').type == 'text') {
                checked.push(fg.querySelector('label').innerHTML + ": " + fg.querySelector('input').value)
            }
            else if (fg.querySelector('input').checked) {
                checked.push(fg.querySelector('label').innerHTML);
            }
        })
        const date = new Date().toDateString();
        quiz.push({ question, checked, date });
    })
    const res = await fetch("https://service.anticoca.com/quiz", {
        method: 'post',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ version, quiz })
    })
    if (res.status == 200) {
        window.location = 'quiz_finish.html';
    } else {
        alert("Pas de connexion, veuillez réessayer!");
    }
}
