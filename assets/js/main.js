let direction = "right";
let nextDirection = direction;
let score = 0;
let speed = 800;
let totalScore = document.getElementById("score");
let snakeSize = document.getElementById("size");
let speedFactor = document.getElementById("speed");

function GetPlayerInput(e) {
    switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
            if (direction != 'right') nextDirection = "left";
            break;
        case 'ArrowUp':
        case 'KeyW':
            if (direction != 'down') nextDirection = "up";
            break;
        case 'ArrowRight':
        case 'KeyD':
            if (direction != 'left') nextDirection = "right";
            break;
        case 'ArrowDown':
        case 'KeyS':
            if (direction != 'up') nextDirection = "down";
            break;
    }
}

function Update() {
    CreateBG();
    MoveSnake(nextDirection);
    direction = nextDirection;
    DropFood();
}

function UpdateScoreBoard() {
    score += (snake.length) * ((850 - speed) / 50);
    totalScore.innerHTML = "Score: " + score;
    snakeSize.innerHTML = "Size: " + snake.length;
    speedFactor.innerHTML = "Speed: " + ((850 - speed) / 50) + "/15";
}

function GameOver() {
    alert(`Game Over!!!\n\nYou made ${score} points!`)
    ResetSnake();
}

let updater = setInterval(function() {
    Update();
}, speed);

document.addEventListener('keydown', GetPlayerInput);