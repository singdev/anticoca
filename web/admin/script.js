let _quiz = [];
const url = "https://service.anticoca.com";
//const url = "http://127.0.0.1:3000";

window.addEventListener('load', async () => {
    _quiz = await fetchQuiz();
    if (_quiz.a) {
        displayQuiz('.quiz_a', _quiz.a);
        getStatisitque(template_a, _quiz.a, '.stat_a', '.stat_tab_a');
    }
    if (_quiz.b) {
        displayQuiz('.quiz_b', _quiz.b);
        getStatisitque(template_b, _quiz.b, '.stat_b', '.stat_tab_b');
    }
    const l1 = _quiz.a ? _quiz.a.length : 0;
    const l2 = _quiz.b ? _quiz.b.length : 0;
    document.querySelector('.participant').innerHTML = (l1 + l2) + " Participants";
})

function getStatisitque(template, quiz, button_class, button_tab_class) {
    getAllQuizQuestion(template);
    let statistics = [];
    for (let i = 0; i < _questions.length; i++) {
        const radio = calculQuestion(i, quiz)[0];
        const checkbox = calculQuestion(i, quiz)[1];
        if(radio.propStatArray.length > 0){
            statistics.push(radio);
        }
        if(checkbox.propStatArray.length > 0){
            statistics.push(checkbox);
        }
    }
    document.querySelector(button_class).addEventListener('click', () => {
        // Load the Visualization API and the corechart package.
        google.charts.load('current', { 'packages': ['corechart'] });
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(() => {
            displayStatistics(statistics);
        });
    });

    document.querySelector(button_tab_class).addEventListener('click', () => {
        displayStatTab(statistics);
    });
}

function displayStatTab(statistics) {
    const section = document.querySelector('.display');
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    statistics.forEach(stat => {
        displayTab(stat, section);
    })
}

function displayTab(stat, section){
    const container = document.createElement('div');
    container.classList.add('stat-tab-ctn');
    const title = document.createElement('h2');
    title.innerHTML = stat.question;
    container.appendChild(title);

    const table = document.createElement('table');
    let total = 0;
    stat.propStatArray.forEach(a => {
        total += a.count;
    })
    stat.propStatArray.forEach(ps => {

        //array.push([ps.prop, ps.count])
        const tr = document.createElement('tr');
        const tdText = document.createElement('td');
        tdText.innerHTML = ps.prop;
        const tdPercent = document.createElement('td');
        tdPercent.classList.add('percent');
        tdPercent.innerHTML = Math.floor(ps.count / total * 100) + "%";
        tr.appendChild(tdText);
        tr.appendChild(tdPercent);
        table.appendChild(tr);
    })
    container.appendChild(table);
    section.appendChild(container);
}

function displayStatistics(statistics) {
    const section = document.querySelector('.display');
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    const chartctn = document.createElement('chartctn');
    chartctn.classList.add('chart-ctn');
    section.appendChild(chartctn);
    statistics.forEach(stat => {
        displayChart(stat, chartctn);

    })
}

function displayChart(stat, container) {
    const div = document.createElement('div');
    container.appendChild(div);
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    const array = [];
    stat.propStatArray.forEach(ps => {
        array.push([ps.prop, ps.count])
    })
    data.addRows(array);
    // Set chart options
    var options = {
        'title': stat.question,
        'width': 400,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(div);
    chart.draw(data, options);
}

async function fetchQuiz() {
    const res = await fetch(url + "/quiz");
    if (res.status == 200) {
        const data = await res.json();
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
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let i = 1;
    quizzes.forEach(quiz => {
        if (quiz && quiz[0]) {
            const a = document.createElement('a');
            a.href = "#";
            a.innerHTML = i++;
            a.addEventListener('click', () => {
                while (section.firstChild) {
                    section.removeChild(section.firstChild);
                }
                const p = document.createElement('p');
                p.innerHTML = (i - 1);
                p.classList.add("number");
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

