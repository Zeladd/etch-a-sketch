const board = document.querySelector("#board");
let usedColor = "black";
let mouseDown = false;
const rainbowColors = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000'];
let isRainbow = false;

function changeColor(container) {
    container.style.backgroundColor = usedColor;
}

function createBoard(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.addEventListener('mousedown', () => {
                if(isRainbow) {
                    usedColor = rainbowColors[Math.floor(Math.random() * 7)];
                }
                mouseDown = true
                changeColor(pixel);
            });
            pixel.addEventListener('mouseup', () => mouseDown = false);
            pixel.addEventListener('mousemove', () => {
                if (mouseDown) {
                    if(isRainbow) {
                        usedColor = rainbowColors[Math.floor(Math.random() * 7)];
                    }
                    changeColor(pixel);
                }
            });
            row.appendChild(pixel);
        }
    }
}

function deleteBoard() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(e => {
        e.remove();
    });
}

createBoard(16);

//buttons
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const x16 = document.querySelector("#x16");
const x32 = document.querySelector("#x32");
const x64 = document.querySelector("#x64");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

//clear
clear.addEventListener('click', () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(e => e.style.backgroundColor = "white");
});

//eraser
eraser.addEventListener('click', () => {
    usedColor = "white";
    isRainbow = false;
});

//16x16
x16.addEventListener('click', () => {
    deleteBoard();
    createBoard(16);
});

//32x32
x32.addEventListener('click', () => {
    deleteBoard();
    createBoard(32);
});

//64x64
x64.addEventListener('click', () => {
    deleteBoard();
    createBoard(64);
});

//black
black.addEventListener('click', () => {
    usedColor = "black";
    isRainbow = false;
});

//rainbow
rainbow.addEventListener('click', () => {
    usedColor = rainbowColors[Math.floor(Math.random() * 7)];
    isRainbow = true;
});