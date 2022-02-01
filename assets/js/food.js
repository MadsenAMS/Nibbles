let isThereBlueFood = false;
let isThereRedFood = false;
let x1, y1, x2, y2;


function DropFood() {
    if (!isThereBlueFood) {
        isThereBlueFood = true;
        do {
            do {
                x1 = Math.floor(Math.random() * 15 + 1) * box;
                y1 = Math.floor(Math.random() * 15 + 1) * box;
            } while (x1 === x2 && y1 === y2)
        } while (IsSnakePosition(x1, y1));
    }

    if (!isThereRedFood) {
        isThereRedFood = true;
        do {
            do {
                x2 = Math.floor(Math.random() * 15 + 1) * box;
                y2 = Math.floor(Math.random() * 15 + 1) * box;
            } while (x1 === x2 && y1 === y2)
        } while (IsSnakePosition(x2, y2));
    }

    RenderSizeFood();
    RenderSpeedFood();
}

function RenderSizeFood() {
    context.fillStyle = "blue";
    context.fillRect(x1, y1, box, box);
}

function RenderSpeedFood() {
    if (speed > 100) {
        context.fillStyle = "red";
        context.fillRect(x2, y2, box, box);
    }
}

function GetSizeFoodPosition() {
    return `${x1}:${y1}`;
}

function GetSpeedFoodPosition() {
    return `${x2}:${y2}`;
}

function EatSpeedFood() {
    speed -= 50;
    if (speed > 100) {
        isThereRedFood = false;
    } else {
        x2 = -99;
        y2 = -99;
    }
    UpdateScoreBoard();
    clearInterval(updater);
    updater = setInterval(function() {
        Update();
    }, speed);
}

function EatSizeFood() {
    isThereBlueFood = false;
    UpdateScoreBoard();
}