let snake = [];

function ResetSnake() {

    snake = [];

    snake[0] = {
        x: 8 * box,
        y: 8 * box
    };
    score = 0;
}

ResetSnake();

function RenderSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function MoveSnake(direction) {
    let newHead = {
        x: snake[0].x,
        y: snake[0].y
    }

    switch (direction) {
        case "right":
            newHead.x += box;
            if (newHead.x >= box * 16) {
                newHead.x = 0;
            }
            break;
        case "left":
            newHead.x -= box;
            if (newHead.x < 0) {
                newHead.x = box * 15;
            }
            break;
        case "up":
            newHead.y -= box;
            if (newHead.y < 0) {
                newHead.y = box * 15;
            }
            break;
        case "down":
            newHead.y += box;
            if (newHead.y >= 16 * box) {
                newHead.y = 0;
            }
            break;
    }

    if (IsSnakePosition(newHead.x, newHead.y)) {
        GameOver();
        return;
    }

    snake.unshift(newHead);
    CheckSnakePosition();
    RenderSnake();
}

function CheckSnakePosition() {
    let headPosition = `${snake[0].x}:${snake[0].y}`;
    if (GetSizeFoodPosition() !== headPosition) {
        snake.pop();
    } else {
        EatSizeFood();
    }
    if (GetSpeedFoodPosition() === headPosition) {
        EatSpeedFood();
    }
}

function IsSnakePosition(x, y) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === x && snake[i].y === y) {
            return true;
        }
    }
    return false;
}