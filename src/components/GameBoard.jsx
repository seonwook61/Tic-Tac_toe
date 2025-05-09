export default function GameBoard({ onSelectSqure, board }) {
    // truns 은 다차원 배열
    // let gameBoard = initialNameGameBoard;

    // // turns가 빈배열이면 초기 게임판 할당 아니라면 루프 반복
    // for(const turn of turns) {
    //     const { square, player } =  turn;
    //     const { row, col} = square;

    //     gameBoard[row][col] = player;
    // }

    // const [GameBoard, setGameBoard] = useState(initialNameGameBoard);

    // function handlerSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         // prevGameBoard[rowIndex](colIndex) = 'X'; 객체나 참조값을 직접 변경하면 메모리 속의 기존값을 바로 변경하는데 리액트의 상태 업데이트보다 이전에 일어나게됨

    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSqure();
    // }

    return (
            <ol id="game-board">
                {board.map( (row, rowIndex)=>
                    <li key={rowIndex}>
                    <ol>
                        {row.map( (playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectSqure(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li> )}
            </ol>
    )
}

