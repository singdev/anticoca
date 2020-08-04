
const modules = document.querySelectorAll('.module');

modules.forEach(m => {
    m.querySelector('h2').addEventListener('click', () => {
        m.querySelector('ul').classList.toggle('show');
        m.querySelector('.video-container').classList.remove('show');
    });

    const videoLink =
        m.querySelector('.video-link');

    if (videoLink) {
        videoLink.addEventListener('click', () => {
            m.querySelector('.video-container').classList.toggle('show');
            m.querySelector('.close-video').addEventListener('click', () => {
                const ctn =
                    m.querySelector('.video-container');
                ctn.classList.remove('show');
                m.querySelector('video').pause();
            })
        })
    }

});

