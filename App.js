function App() {
    return (
        <div>
            <h1>TIC-REACT-TOE</h1>
            <div className="flex-container flex-column">
            <div className="flex-container flex-wrap" id="board">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            </div>
            <h2>It's X's turn!</h2>
            <button id="reset-button">Reset</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, root)