import React from "react";
import Header from "./App"

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return(
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />

      {}
      <Player name='Viktor' score={50}/>
      <Player name='Malin' score={90}/>
      <Player name='Stella' score={20}/>
      <Player name='Marie' score={60}/>
    </div>
  )
}

export default App;
