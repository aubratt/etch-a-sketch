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
        square.style.border = "1px solid rgb(0, 0, 0, 0.05)";
        square.style.width = squareSize;
        square.style.height = squareSize;
        grid.appendChild(square);
        square.addEventListener("mouseover", function (event) {
            darkenSquare(event.target, getCurrentColorMode());
        });
    }
}

function changeSelectedButton(clickedSquaresBtn) {
    const previousSelected = document.querySelector(".selected");
    previousSelected.classList.remove("selected");

    clickedSquaresBtn.classList.add("selected");
}

function changeColorMode(modeBtn) {
    const squares = document.querySelectorAll(".square");

    if (modeBtn.className === "black") {
        modeBtn.classList = "rainbow";

        squares.forEach((square) => {
            square.addEventListener("mouseover", function (event) {
                darkenSquare(event.target, getCurrentColorMode());
            });
        });
    } else {
        modeBtn.classList = "black";

        squares.forEach((square) => {
            square.addEventListener("mouseover", function (event) {
                darkenSquare(event.target, getCurrentColorMode());
            });
        });
    }
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
}

function darkenSquare(square, colorMode) {
    const currentBgColor = window.getComputedStyle(square).backgroundColor;

    if (currentBgColor === "rgb(255, 255, 255)") {
        if (colorMode === "black") {
            square.style.backgroundColor = "rgb(0, 0, 0)";
            square.style.opacity = "0.1";
        } else {
            square.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
            square.style.opacity = "0.1";
        }
    } else {
        const currentOpacity = parseFloat(window.getComputedStyle(square).opacity);
        square.style.opacity = currentOpacity + 0.1;
    }
}

function getCurrentColorMode() {
    const modeBtn = document.getElementById("mode-btn");
    const currentColorMode = modeBtn.className;

    return currentColorMode;
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

    document.getElementById("mode-btn").addEventListener("click", function (event) {
        changeColorMode(event.target);
    });

    document.getElementById("clear-btn").addEventListener("click", function() {
        document.querySelectorAll(".square").forEach((square) => {
            square.style.backgroundColor = "white";
            square.style.opacity = "1";
        });
    });
});
