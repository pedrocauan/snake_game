let board; // Retangulo onde a cobrinha fica
let context; //contexto do canvas
let blockSize = 20;
let cols = 30;
let rows =20;

let aplleAudio; //audio da maçã sendo comida
let gameOverAudio; //audio de gameOver

let snakeX = 0;
let snakeY = 0;
let tail = []; //tamanho da cobra

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

    //movimentação do jogador
    document.addEventListener("keyup", changeDirection);

    board.addEventListener("click", ()=> {
        gameOver = false;
        score = 0;
    });

    foodPlace();

    setInterval(update, 1000/10);

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

function createText() {

}