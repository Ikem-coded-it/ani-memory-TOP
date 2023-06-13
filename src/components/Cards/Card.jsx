/* eslint-disable react/prop-types */
import "../../styles/card.css"

export default function Card ({ src, onClick, dataId }) {
  let name = src.split("-")[1]
  if (name === "haruno") name  = "sakura"

  return (
    <div
      className="card"
      onClick={onClick}
      data-id={dataId}>
      <img className="image" src={src} />
      <h5>
        {name}
      </h5>
    </div>
  )
}