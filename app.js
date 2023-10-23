'use strict';

const fortune = ["大吉","中吉","小吉","末吉","凶"];

const omikuziArea = document.getElementById('js-omikuziArea');
const omikuzi = () => {
    let random = Math.floor(Math.random() * fortune.length);
    omikuziArea.textContent = fortune[random];
}

omikuziArea.addEventListener('click',omikuzi);