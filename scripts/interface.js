document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach(square =>
        square.addEventListener("click", handleClick));
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    handleMove(position);

    updateSquare(position);


    if (gameOver) {
        let winnerSymbol = symbols[currentPlayer];
        setTimeout(() => alert(`Game Over! ${winnerSymbol.toUpperCase()} wins!`));
        createResetButton();
    }
    
    else if(boardIsFull()){
        setTimeout(() => alert("Game Over! It's a tie!"));
        createResetButton();
    }
}

function updateSquare(position) {
    let square = document.getElementById(`${position}`);
    let symbol = board[position];

    square.innerHTML = `<div class="${symbol}"></div>`
}

let resetButton = document.getElementById("reset_button");
resetButton.addEventListener("click", restartGame);

function restartGame() {
    cleanBoard();
    resetGame();
    eraseResetButton();
}

function createResetButton() {
    resetButton.style.display = "inline-block";
}

function eraseResetButton() {
    resetButton.style.display = "none";
}

function cleanBoard() {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != "") {
            square.innerHTML = "";
        }
    });
}

// function updateSquares() {
//     let squares = document.querySelectorAll(".square");

//     squares.forEach(square => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != "") {
//             square.innerHTML = `<div class="${symbol}"></div>`;
//         }
//     });
// }

