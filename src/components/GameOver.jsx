export default function GameOver({winner, onRestart, player}) {
    return <div id="game-over">
        <h2>Game OVer!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It`s a draw!</p>}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
}