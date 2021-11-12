let board = ["", "", "", "", "", "", "", "", ""];
let currentTurn = 0;
let currentPlayer = currentTurn % 2;
let gameOver = false;

let symbols = ["x", "o"];

let victoryCombinations = [
    //horizontal 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(position) {

    if (!gameOver) {

        if (board[position] == "") {

            let currentPlayerSymbol = symbols[currentPlayer];

            board[position] = currentPlayerSymbol;
            
            checkVictory();

            if (!gameOver) {
                currentTurn++;
                currentPlayer = currentTurn % 2;
            }
        }
        return gameOver;
    }
    return;
}

function checkVictory() {
    for (let i = 0; i < victoryCombinations.length; i++) {

        let currentCombination = victoryCombinations[i];

        if (lineIsFulfilled(currentCombination)) {
            gameOver = true;
        }
    }
}

function boardIsFull() {
    for (let i = 0; i< board.length; i++){
        if(board[i] == ""){
            return false;
        }
    }
    return true;
}

function lineIsFulfilled(combination) {

    let pos1 = combination[0];
    let pos2 = combination[1];
    let pos3 = combination[2];

    if (board[pos1] == board[pos2] &&
        board[pos2] == board[pos3] &&
        board[pos2] != '') {
        return true;
    }
    return false;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentTurn = 0;
    currentPlayer = 0;
    gameOver = false;
}