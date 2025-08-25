function loadGrid(numberOfSquares) {
    const grid = document.getElementById("grid");

    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = "white";
        square.style.border = "0.5px solid rgb(0, 0, 0, 0.15)";
        square.style.width = "32px";
        square.style.height = "32px";
        grid.appendChild(square);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultNumberOfSquares = 16 * 16;
    loadGrid(defaultNumberOfSquares);

    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        });
    });
});
