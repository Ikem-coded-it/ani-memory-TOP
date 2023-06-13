import CardsContainer from "./Cards/CardsContainer"
import ScoreBoard from "./ScoreBoard"
import { ScoreContext } from "./Context/scoreContext";
import { useState } from "react";

export default function Main() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return(
    <div className='main'>
      <ScoreContext.Provider 
      value={{
        score, 
        highScore, 
        stateSetter: {setScore, setHighScore}
      }}>
        <CardsContainer />
        <ScoreBoard />
      </ScoreContext.Provider>
    </div>
  )
}