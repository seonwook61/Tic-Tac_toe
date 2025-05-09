import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import { useState } from "react"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X : 'Player 1',
  O : 'Player 2'
};

const INITAL_GAME_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

// 헬퍼함수 
/* 
  컴포넌트와 관련된 그 어떤 상태나 데이터에 접근할 필요가 없음
  이것은 또한 컴포넌트 함수가 재실행될 때 스스로 재실행하지않음.
*/

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITAL_GAME_BOARD.map(array => [...array])];

  // turns가 빈배열이면 초기 게임판 할당 아니라면 루프 반복
  for(const turn of gameTurns) {
      const { square, player } =  turn;
      const { row, col} = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner;

  for( const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
        firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner
}

function App() {
  const[players, setPlayers] =  useState(PLAYERS);
  
  // function handlerEdit(props) {
  //   if(props.name)
  // }

  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw =  (gameTurns.length === 9 && !winner);

  function handlerSelectSquare(rowIndex, colIndex) {
    
    //setActivePlayer( (curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' )

    setGameTurns( prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      
      const updatedTurns = [
        { square : { row: rowIndex, col: colIndex}, player : currentPlayer },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    //setPlayers(symbol, newName);
    setPlayers( prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initialName={PLAYERS.X}
            symbol="O" 
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player 
            initialName={PLAYERS.O}
            symbol="X" 
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/> }
        
        <GameBoard onSelectSqure={handlerSelectSquare}
        board={gameBoard}
        />
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
