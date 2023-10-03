/*----- constants -----*/

/*----- app's state (variables) -----*/
let board;
let turn = 'X';

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];
};
init();

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    messages.textContent = `It's ${turn}'s turn!`;
};
render();

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });

    board[idx] = turn;
    // Swap to opponent
    turn = turn === 'X' ? '0' : 'X';
    // Render changes
    render();
};