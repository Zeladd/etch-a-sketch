const board = document.querySelector("#board");
let usedColor = "black";
let mouseDown = false;

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
            pixel.addEventListener('mousedown', () => mouseDown = true);
            pixel.addEventListener('mouseup', () => mouseDown = false);
            pixel.addEventListener('mousemove', () => {
                if (mouseDown) {
                    changeColor(pixel);
                }
            });
            row.appendChild(pixel);
        }
    }
}

createBoard(32);