let board; // canvas onde a cobrinha fica
let context; //contexto do canvas
let blockSize = 20; //tamanho do retangulo que fica a cobra
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
    createRect(0, 0, board.width / 2, board.height / 2, "center", 50);

    if(gameOver) {
        //tela de game over
        createText("Game Over", board.width / 2, board.height / 2  - 25, 50);
        createText(`Score: ${score}`, board.width / 2, board.height / 2 + 25, "center" );

        createText("Jogar", (cols * blockSize) / 2, board.height - 50, "center");
        return
    }
    //Score na tela
    createText(`Score: ${score}`, 30, 40);

    //cria primeiro comida da cobra
    createRect(foodX, foodY, blockSize, "lime");

    if(snakeX === foodX && snakeY === foodY) {
        tail.push([foodX, foodY]);
        score += 10;

        appleAudio.play();
        foodPlace()
    }

    //rabo da cobra
    for(let i = tail.length; i > 0; i--) {
        tail[i] = tail[i - 1];
    }

    if(tail.length) {
        tail[0] = [snakeX, snakeY];
    }

    //posição da cobra
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    createRect(snakeX, snakeY, blockSize, "orange");

    for(let i = 0; i < tail.length; i++){
        createRect(tail[i][0], tail[i][1], blockSize, blockSize, "Lime");
    }

    //Colisao com a parede
    if(snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY < rows * blockSize){
        gameOverEvent();
    }

    //colisao da cobra com a própria calda
    for(let i = 0; i < tail.length ; i++ ) {
        if(snakeX = tail[i[0]] && snakeY === tail[i][1]) {
            gameOverEvent();
        }
    }


}

//lugar onde aparecerá a comida
function foodPlace() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

//Muda a direção da cobra
function changeDirection(e) {
    if(e.code === "ArrowUp"){
        velocityX = 0;
        velocityY = -1
    }
    else if(e.code === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.code === "ArrowRight") {
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.code === "ArrowLeft") {
        velocityX = 1;
        velocityY = 0;
    }
}

function gameOverEvent(){
    gameOver = true;
    gameOverAudio.play();
    snakeX = 0;
    snakeY = 0;
    velocityX = 0;
    velocityY = 0;
}

function createRect() {

}

function createText() {

}