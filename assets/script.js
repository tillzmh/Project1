// modal
const emoji1 = document.getElementById("1");
const emoji2 = document.getElementById("2");
const emoji3 = document.getElementById("3");
const aboutUsButton = document.querySelector('#aboutUs');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const form = document.querySelector('#form');
function updateEmoji(element) {
    fetch(
        "https://emojihub.herokuapp.com/api/random/category_smileys_and_people"
    )
        .then((response) => response.json())
        .then((emoji) => {
            element.innerHTML = emoji.htmlCode[0];
        });

aboutUsButton.addEventListener('click', () => {
    modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
//Function that is triggered via click or clicking enter will be placed before the search event listener 
//form.addEventListener('submit', ){

//};
