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
        updateDisplay();
        checkWin();
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
    
    const updateDisplay = () => {
        for (var i = 0; i < 9; i++) {
            if (boardVals[i]) {
                let space = document.getElementById(i);
                space.textContent = boardVals[i];
            }
        }
    }

    const checkWin = () => {
        if (
            boardVals[0] != null &&
            boardVals[0] == boardVals[1] && 
            boardVals[0] == boardVals[2]
        ) {
            console.log("Winner!", boardVals[0]);
        } else if (
            boardVals[3] != null &&
            boardVals[3] == boardVals[4] &&
            boardVals[3] == boardVals[5] 
        ) {
            console.log("Winner!", boardVals[3]);
        } else if (
            boardVals[6] != null &&
            boardVals[6] == boardVals[7] &&
            boardVals[6] == boardVals[8]
        ) {
            console.log("Winner!", boardVals[6]);
        } else if (
            boardVals[0] != null &&
            boardVals[0] == boardVals[3] &&
            boardVals[0] == boardVals[6]
        ) {
            console.log("Winner!", boardVals[0]);
        } else if (
            boardVals[1] != null &&
            boardVals[1] == boardVals[4] &&
            boardVals[1] == boardVals[7]
        ) {
            console.log("Winner!", boardVals[1]);
        } else if (
            boardVals[2] != null &&
            boardVals[2] == boardVals[5] &&
            boardVals[2] == boardVals[8]
        ) {
            console.log("Winner!", boardVals[2]);
        } else if (
            boardVals[0] != null &&
            boardVals[0] == boardVals[4] &&
            boardVals[0] == boardVals[8]
        ) {
            console.log("Winner!", boardVals[0]);
        } else if (
            boardVals[2] != null &&
            boardVals[2] == boardVals[4] &&
            boardVals[2] == boardVals[6] 
        ) {
            console.log("Winner!", boardVals[2]);
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
