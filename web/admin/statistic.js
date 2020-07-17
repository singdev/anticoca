let _questions = [];

function getAllQuizQuestion(template) {
    let element = new DOMParser().parseFromString(template, 'text/html');
    _questions = element.querySelectorAll('.question');
}

function calculQuestion(questionIndex, quizArray) {
    let question = _questions[questionIndex].querySelector('h1').innerHTML;
    let props1 = _questions[questionIndex].querySelectorAll("input[type='checkbox']+label");
    let props2 = _questions[questionIndex].querySelectorAll("input[type='radio']+label");
    let array = [calculateForPropos(props2, question, quizArray), calculateForPropos(props1, question, quizArray)];
    return array;
}

function calculateForPropos(props, question, quizArray) {
    let propStatArray = [];
    props.forEach(prop => {
        let count = 0;
        quizArray.forEach(userResponse => {
            let currentQuestion = userResponse.find(ur => ur.question.replace(/ /g, "").toLowerCase() == question.replace(/ /g, "").toLowerCase());
            if(currentQuestion){
                currentQuestion.checked.forEach(checked => {
                    const a = checked.replace(/ /g, "").toLowerCase();
                    const b = prop.innerHTML.replace(/ /g, "").toLowerCase();
                    if (a == b) {
                        count++;
                    }
                })
            }
        });
        propStatArray.push({ prop: prop.innerHTML, count });
    });
    return { question, propStatArray };
}



