/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ScoreContext } from "./Context/scoreContext";
import Congratulate from "./Congratulate";
import "../styles/scoreboard.css";

export default function ScoreBoard() {
  const score = useContext(ScoreContext);

  return(
    <div className="score-container">
      {score.highScore == 12 ?
       <Congratulate /> :
        null}
      <div className="score">
        Score: {score.score}
      </div>
      <div className="high-score">
        High score: {score.highScore}
      </div>
    </div>
  )
}