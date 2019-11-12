import React from "react"
import "./Feedback.css"

const Feedback = props => {
  return (
    <p className={`Feedback ${ props.isPositive ? "Feedback__positive" : "Feedback__negative" }`}>{props.contents}</p>
  )
}

export default Feedback
