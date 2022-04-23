const gameBoard = (() => {
    console.log("gameboard initialized")
    let boardVals = [];
    for (let i = 0; i < 9; i++) { boardVals.push(null); }
    
    const getBoard = () => {
        console.log(boardVals);
        return boardVals;
    }

    const updateBoard = (location, newValue) => {
        boardVals[location] = newValue;
        updateDisplay(boardVals);
    }

    const makeBlocks = () => {
        let id = 0;
        for (var i = 0; i < 9; i++) {
            var box = document.createElement('div');
            box.className = "box";
            box.id = id;
            box.addEventListener("click", action);
            id++;
            document.getElementById('gameboard').appendChild(box);
        }
    }
    
    const updateDisplay = (board) => {
        for (var i = 0; i < 9; i++) {
            if (board[i]) {
                let space = document.getElementById(i);
                space.textContent = board[i];
            }
        }
    }
    return {getBoard, updateBoard, makeBlocks, updateDisplay};
})();

const player = (name, marker) => {

    return {name, marker}
}

const first = player(1, "X");
const second = player(2, "O");

let currentPlayer;

const getCurrentPlayer = (player1, player2) => {
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else if (currentPlayer == player2) {
        currentPlayer = player1;
    } else {
        currentPlayer = player1;
    }

    return currentPlayer;
}

const action = (event) => {
    console.log(event.srcElement.id);
    let board = gameBoard.getBoard();
    if (!board[event.srcElement.id]) {
        gameBoard.updateBoard(event.srcElement.id, getCurrentPlayer(first, second).marker);
    }
}

gameBoard.makeBlocks();
gameBoard.updateDisplay(gameBoard.getBoard());
