const player = (name, marker) => {

    return {name, marker}
}


const gameBoard = (() => {
    console.log("gameboard initialized")
    let boardVals = [];
    for (let i = 0; i < 9; i++) { boardVals.push(null); }
    let winner = false; //TODO: Need better gamestate data structure
    let tie = false;

    const restart = () => {
        clearBoard();
        updateDisplay();
        winner = false;
        tie = false;
        initPlayers();       
    }
 
    let restartBtn = document.getElementById('restart');
    restartBtn.addEventListener("click", restart);

    const player1 = player("X", "X");
    const player2 = player("O", "O");
    
    const initPlayers = () => {
        player1.name = prompt("Player 1 Name")
        player2.name = prompt("Player 2 Name")
    }
    
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
            let space = document.getElementById(i);
            space.textContent = boardVals[i];
        }
    }

    const checkWin = () => {
        //TODO: Stop the game when a winner is found
        if (
            boardVals[0] != null &&
            boardVals[0] == boardVals[1] && 
            boardVals[0] == boardVals[2]
        ) {
            window.alert("Winner!", boardVals[0]);
            winner = true;
        } else if (
            boardVals[3] != null &&
            boardVals[3] == boardVals[4] &&
            boardVals[3] == boardVals[5] 
        ) {
            window.alert("Winner!", boardVals[3]);
            winner = true;
        } else if (
            boardVals[6] != null &&
            boardVals[6] == boardVals[7] &&
            boardVals[6] == boardVals[8]
        ) {
            window.alert("Winner!", boardVals[6]);
            winner = true;
        } else if (
            boardVals[0] != null &&
            boardVals[0] == boardVals[3] &&
            boardVals[0] == boardVals[6]
        ) {
            window.alert("Winner!", boardVals[0]);
            winner = true;
        } else if (
            boardVals[1] != null &&
            boardVals[1] == boardVals[4] &&
            boardVals[1] == boardVals[7]
        ) {
            window.alert("Winner!", boardVals[1]);
            winner = true;
        } else if (
            boardVals[2] != null &&
            boardVals[2] == boardVals[5] &&
            boardVals[2] == boardVals[8]
        ) {
            window.alert("Winner!", boardVals[2]);
            winner = true;
        } else if (
            boardVals[0] != null &&
            boardVals[0] == boardVals[4] &&
            boardVals[0] == boardVals[8]
        ) {
            window.alert("Winner!", boardVals[0]);
            winner = true;
        } else if (
            boardVals[2] != null &&
            boardVals[2] == boardVals[4] &&
            boardVals[2] == boardVals[6] 
        ) {
            window.alert("Winner!", boardVals[2]);
            winner = true;
        } else {
            if (boardVals.indexOf(null) > -1) {
                return;
            }
            window.alert("Tie!"); //TODO: Tie should trigger when a winner isn't possible with current board.
            tie = true;
        }
        
        if (winner || tie) {
            restart();
            return;
        }
    }

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
            gameBoard.updateBoard(event.srcElement.id, getCurrentPlayer(player1, player2).marker);
        }
    }

    const clearBoard = () => {
        boardVals = [];
        for (let i = 0; i < 9; i++) { boardVals.push(null); }
    }

    return {initPlayers, getBoard, updateBoard, makeBlocks, updateDisplay};
})();


gameBoard.initPlayers();
gameBoard.makeBlocks();
gameBoard.updateDisplay(gameBoard.getBoard());
