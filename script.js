function loadGrid(squareCount) {
    const grid = document.getElementById("grid");

    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = "white";
        square.style.border = "1px solid rgb(0, 0, 0, 0.15)";
        square.style.width = "2rem";
        square.style.height = "2rem";
        grid.appendChild(square);
    }
}

function changeSquareCount(clickedSquaresBtn) {
    changeSelectedButton(clickedSquaresBtn);
}

function changeSelectedButton(clickedSquaresBtn) {
    clickedSquaresBtn.style.backgroundColor = "lime";
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultSquareCount = 16 * 16;
    loadGrid(defaultSquareCount);

    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = "black";
        });
    });

    document.querySelectorAll(".squares-btn").forEach((btn) => {
        btn.addEventListener("click", function(event) {
            changeSquareCount(event.target);
        });
    });
});
