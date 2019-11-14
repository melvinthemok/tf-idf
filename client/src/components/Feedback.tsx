import React from "react"
import "./Feedback.css"

type FeedbackProps = {
  isPositive: boolean,
  contents: string
}

const Feedback = (props: FeedbackProps) => {
  return (
    <p className={`Feedback ${ props.isPositive ? "Feedback__positive" : "Feedback__negative" }`}>{props.contents}</p>
  )
}

export default Feedback
