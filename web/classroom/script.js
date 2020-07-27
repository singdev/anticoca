
const modules = document.querySelectorAll('.module');

modules.forEach(m => {
    m.querySelector('h2').addEventListener('click', () => {
        m.querySelector('ul').classList.toggle('show');
    });
});