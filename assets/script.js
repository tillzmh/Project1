// modal
const aboutUsButton = document.querySelector('#aboutUs');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

aboutUsButton.addEventListener('click', () => {
    modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})


