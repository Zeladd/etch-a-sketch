const board = document.querySelector("#board");

function createBoard(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            row.appendChild(pixel);
        }
    }
}

createBoard(16);