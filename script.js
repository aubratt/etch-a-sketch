function loadGrid(squareCount, squareSize) {
    const grid = document.getElementById("grid");

    const currentSquares = document.querySelectorAll(".square");
    if (currentSquares) {
        currentSquares.forEach((square) => {
            square.remove();
        });
    }

    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = "white";
        square.style.border = "1px solid rgb(0, 0, 0, 0.15)";
        square.style.width = squareSize;
        square.style.height = squareSize;
        grid.appendChild(square);
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        })
    }
}

function changeSelectedButton(clickedSquaresBtn) {
    const previousSelected = document.querySelector(".selected");
    previousSelected.classList.remove("selected");

    clickedSquaresBtn.classList.add("selected");
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultSquareCount = 16 * 16;
    const defaultSquareSize = "2rem";
    loadGrid(defaultSquareCount, defaultSquareSize);

    document.querySelectorAll(".squares-btn").forEach((btn) => {
        btn.addEventListener("click", function (event) {
            let squareCount;
            let squareSize;

            if (event.target.id === "eight") {
                squareCount = 8 * 8;
                squareSize = "4rem";
            } else if (event.target.id === "sixteen") {
                squareCount = 16 * 16;
                squareSize = "2rem";
            } else if (event.target.id === "thirty-two") {
                squareCount = 32 * 32;
                squareSize = "1rem";
            } else {
                squareCount = 64 * 64;
                squareSize = "0.5rem";
            }

            loadGrid(squareCount, squareSize);
            changeSelectedButton(event.target);
        });
    });
});
