const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]

let turn = document.querySelector('.show-turn');
let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-btn');
let winText = document.querySelector('.winText')

let turnO = true;
let gameOver = false;


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (!box.classList.contains('clicked') && gameOver == false) {
            if (turnO == true){
                box.innerText = "O";
                turnO = false;
                turn.innerText = 'X'
            }
            else {
                box.innerText = "X";
                turnO = true;
                turn.innerText = 'O'
            }
            box.classList.add('clicked');
            checkWinner();
        };
    });
});

function checkWinner () {
    for(let i=0; i<winPattern.length; i++) {
        if(
            boxes[winPattern[i][0]].innerText == 'O' &&
            boxes[winPattern[i][1]].innerText == 'O' &&
            boxes[winPattern[i][2]].innerText == 'O'
        ) {
            winText.innerText = '0 is the winner'
            winText.classList.remove('hidden');
            gameOver = true;
        }
        else if(
            boxes[winPattern[i][0]].innerText == 'X' &&
            boxes[winPattern[i][1]].innerText == 'X' &&
            boxes[winPattern[i][2]].innerText == 'X'
        ){
            winText.innerText = 'X is the winner'
            winText.classList.remove('hidden');
            gameOver = true;
        }
    }
    if([...boxes].every((box) => box.classList.contains('clicked'))){
        winText.innerText = 'Draw'
        winText.classList.remove('hidden');
        gameOver = true;
    }
};


resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.classList.remove('clicked');
    });
    turnO = true;
    winText.innerText = '';
    winText.classList.add('hidden');
    gameOver = false;
});