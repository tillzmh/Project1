// modal
const aboutUsButton = document.querySelector('#aboutUs');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const form = document.querySelector('#form');
const searchButton = document.querySelector('#search');
const searchText = document.querySelector('#search-text');
aboutUsButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});


let emojiCache = [];


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!emojiCache.length) {
        fetch("https://emojihub.herokuapp.com/api/all")
            .then((response) => response.json())
            .then((data) => {
                emojiCache = data;
            });
    }
    const result = emojiCache.find((emoji) => {
         return emoji.name.startsWith(searchText.value.toLowerCase().trim());
    });
    //const searchTextInput = localstorage.getItem("search-input")
    document.getElementById("emoji-results").innerHTML=result?.htmlCode
        ? result?.htmlCode
        : "not found";
    localStorage.setItem('search-input',searchText.value);
});

function websiteVisits(response){
    document.querySelector("#visits").textContent = response.value;
}
fetch('https://api.countapi.xyz/hit/emojifinder/6cdfd2d2-c20b-493d-a449-946af8a1bc80')
.then(response => response.json())
.then(websiteVisits);


