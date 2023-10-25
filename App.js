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
let win;
let ended;

function handleTurn(event) {
    if(ended === true)return;
    let idx = event.target.id
    let newBoard = [...board];
    newBoard[idx] = turn;
    setBoard(newBoard)
    let newTurn = turn === 'X' ? '0' : 'X';
    setTurn(newTurn)
    //win = getWinner();
    //if(win != null) ended = true;
};

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
            <h2>It's X's turn!</h2>
            <button id="reset-button">Reset</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, root)