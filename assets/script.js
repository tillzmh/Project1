// modal
const aboutUsButton = document.querySelector('#aboutUs');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const form = document.querySelector('#form');

aboutUsButton.addEventListener('click', () => {
    modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
//Function that is triggered via click or clicking enter will be placed before the search event listener 
//form.addEventListener('submit', ){

//};
