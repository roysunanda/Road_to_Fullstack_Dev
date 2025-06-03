import { useState } from "react";
import { GameBoard } from "./components/GameBoard.jsx";
import { Player } from "./components/Player.jsx";
export const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            playerName='Player 1'
            playerSymbol='X'
            isActive={activePlayer === "X"}
          />
          <Player
            playerName='Player 2'
            playerSymbol='O'
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
};
