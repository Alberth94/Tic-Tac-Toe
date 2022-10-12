let win = 0;
let curentPlayer = "X";
const squares =  document.querySelectorAll(".square");
let fullSquares = 0;
const WINNING_COMBINATIONS = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

function checkSquares(id) {
    if (squares[id].innerText == "") {
        switchPlayer(id);
    }
}

function switchPlayer(id) {
    if (curentPlayer === "X") {
        document.getElementById('player').innerText = "O's turn";
        document.getElementById(id).innerHTML = curentPlayer;
        ++fullSquares;
        winOrDraw();
        curentPlayer = "O";
    } else {
        document.getElementById('player').innerText = "X,s turn";
        document.getElementById(id).innerHTML = curentPlayer;
        ++fullSquares;
        winOrDraw();
        curentPlayer = "X";
    }
}

function winOrDraw() {
     WINNING_COMBINATIONS.forEach(function(elements) {
        let check = elements.every(i => squares[i].innerHTML === curentPlayer);
        if (check) {
            ++win;
            message();
        } 
    })
    message();
}

function message () {
    if (win === 1) {
        document.getElementById('message').innerHTML = curentPlayer + " Wins! Press restart to play another round."; 
        document.getElementById("gameBoard").remove();   
    } else if (fullSquares === 9 && win === 0) {
        document.getElementById('message').innerHTML = " It's a draw! Press restart to play another round."; 
    }
}

function restartGame() {
    window.location.reload();
} 