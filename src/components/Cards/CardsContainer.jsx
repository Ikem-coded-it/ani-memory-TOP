/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import animePicsArray from "../../assets/pics"
import {v4 as uuidv4} from "uuid"
import Card from "./Card"
import shuffle from "../../Utils"
import { ScoreContext } from "../Context/scoreContext";
import { useContext } from "react";
import "../../styles/card.css"

export default function CardsContainer() {
  const score = useContext(ScoreContext)

  const [pics, setPics] = useState([])
  const [clickedCards, setClickedCards] = useState([])

  useEffect(() => {
    setPics(animePicsArray)
  }, [])
  
  const handleClick = async(e) => {
    const cardId = e.target.getAttribute('data-id')
    console.log(cardId)
    if (clickedCards.includes(cardId)) {
      await score.stateSetter.setScore(0)
      if (score.score > score.highScore) {
        const newScore = score.score
        await score.stateSetter.setHighScore(newScore)
      }
      setClickedCards([])
      return
    }

    await setClickedCards([...clickedCards, cardId])

    const newScore = score.score + 1
    await score.stateSetter.setScore(newScore)
    
    const shuffledPics = shuffle(pics.splice(0, pics.length))
    await setPics(shuffledPics)
  }

  return (
    <div 
      className="cards-container">
      {
        pics.map((pic) => {
          return (
            <Card 
              key={uuidv4()}
              onClick={handleClick}
              src={pic.src}
              dataId={pic.id}
            />
          )
        })
      }
    </div>
  )
}