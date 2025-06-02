import { Player } from "./components/Player";

export const App = () => {
  return (
    <main>
      <div id='game-container'>
        <ol>
          <Player playerName='Player 1' playerSymbol='X' />
          <Player playerName='Player 2' playerSymbol='O' />
        </ol>
      </div>
    </main>
  );
};
