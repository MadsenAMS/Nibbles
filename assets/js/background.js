const canvas = document.getElementById("nibbles");
const context = canvas.getContext("2d");
const box = 32;

function CreateBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}