const initialNameGameBoard = [
    [null,'X','O'],
    [null,'X','O'],
    [null,'X','O'],
]

export default function GameBoard() {
    return (
            <ol id="game-board">
                {initialNameGameBoard.map( (row, rowIndex)=><li key={rowIndex}>
                    <ol>
                        {row.map( (playerSymbol, colIndex) => <li key={colIndex}><button>{playerSymbol}</button></li>)}
                    </ol>
                </li> )}
            </ol>
    )
}

