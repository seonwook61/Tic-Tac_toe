import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  
  // function handlerEdit(props) {
  //   if(props.name)
  // }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="O"/>
          <Player name="Player2" symbol="X"/>
        </ol>

        GAME BOARD
        <GameBoard/>
      </div>

      LOG
    </main>
  )
}

export default App
