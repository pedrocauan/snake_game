let board; // Retangulo onde a cobrinha fica
let context; //contexto do canvas
let blockSize = 20;
let cols = 30;
let rows =20;

let aplleAudio;
let gameOverAudio;

let snakeX = 0;
let snakeY = 0;
let tail = [];

let foodX = 0;
let foodY = 0;

let score = 0;

let velocityX = 1;
let velocityY = 0;

let gameOver = false;

window.addEventListener("load", () => {
    //canvas
    board = document.querySelector("#board");
    context = board.getContext("2d");

    //audios do jogo
    appleAudio = new Audio("./assets/sounds/apple_sound.mp3");
    gameOverAudio = new Audio("./assets/sounds/game_over_sound.mp3");

    board.width = cols * blockSize;
    board.height = rows * blockSize;

    

});

function update() {

}

//lugar onde aparecerá a comida
function foodPlace() {

}

//Muda a direção da cobra
function changeDirection() {

}

function gameOverEvent(){

}

function createRect() {

}