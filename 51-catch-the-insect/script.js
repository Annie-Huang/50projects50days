const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');

// screens[0].classList.add('up');

let second = 0;
let score = 0;
let selected_insect = {};

// Click to go to 2nd screen
start_btn.addEventListener('click', () => screens[0].classList.add('up'));
