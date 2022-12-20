const boardH = document.querySelector(".board-h");
const boardV = document.querySelector(".board-v")

function createBoard(size) {
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            boardH.appendChild(pixel);
        }


    }
}

createBoard(16);