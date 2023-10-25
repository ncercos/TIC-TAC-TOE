function App() {

/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/
const [board, setBoard] = React.useState(["","","","","","","","",""])
const [turn, setTurn] = React.useState('X');
const [win, setWin] = React.useState(null);
const [ended, setEnded] = React.useState(false);

function handleTurn(event) {
    if(ended === true)return;
    let idx = event.target.id
    if(board[idx] != "")return;
    let newBoard = [...board];
    newBoard[idx] = turn;
    setBoard(newBoard)
    let newTurn = turn === 'X' ? '0' : 'X';
    setTurn(newTurn)
    let winner = getWinner(newBoard);
    setWin(winner)
    let hasEnded = winner != null ? true : false;
    setEnded(hasEnded);
};

function getWinner(newBoard) {
    let winner = null;

    winningCombos.forEach(function(combo, index) {
        if (newBoard[combo[0]] && newBoard[combo[0]] === newBoard[combo[1]] && newBoard[combo[0]] === newBoard[combo[2]]) 
            winner = newBoard[combo[0]];
    });

    return winner ? winner : newBoard.includes('') ? null : 'T';
};

function reset() {
    setBoard(["","","","","","","","",""]);
    setTurn('X');
    setWin(null);
    setEnded(false);
}

function Message() {
    let message = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    return <h2>{message}</h2>
}

    return (
        <div>
            <h1>TIC-REACT-TOE</h1>
            <div className="flex-container flex-column">
            <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
                {board.map((value, idx) => {
                       return (
                        <div className="square" key={idx} id={idx}>
                            {value}
                        </div>
                    )
                })}
            </div>
            <Message/>
            <button id="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, root)