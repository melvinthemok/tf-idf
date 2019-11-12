import React, { useState } from "react"

import Editable from "./Editable"
import Waiting from "./Waiting"
import Feedback from "./Feedback"
import Tests from "./Tests"

const Practice = props => {
  const [editable, setEditable] = useState(props.editable)
  const [locked, setLocked] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [done, setDone] = useState(false)
  const [feedbackPolarity, setFeedbackPolarity] = useState(false)
  const [feedbackContents, setFeedbackContents] = useState("")

  const submit = async () => {
    setDone(false)
    setLocked(true)
    setWaiting(true)
    try {
      const res = await fetch(
        process.env.LAMBDA_URL,
        {
          method: "POST",
          headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
          }),
          body: JSON.stringify({
            "editable": { "0": editable },
            "hidden": { "0": JSON.stringify(props.hidden) }
          })
        }
      )
      if (!res.ok) { throw Error(res.statusText) }
      const feedback = (await res.json()).jsonFeedback
      feedback.status === 'success' ? setFeedbackPolarity(true) : setFeedbackPolarity(false)
      setFeedbackContents(feedback.reason)
    } catch (err) {
      setFeedbackPolarity(false)
      setFeedbackContents(`${err.name}: ${err.message}`)
    } finally {
      setDone(true)
      setLocked(false)
      setWaiting(false)
    }
  }

  return (
    <>
      <Editable
        value={editable}
        handleChange={(v) => setEditable(v)}
        submit={submit}
        isLocked={locked}
      />
      {waiting && <Waiting/>}
      {done && <Feedback
        isPositive={feedbackPolarity}
        contents={feedbackContents}
      />}
      <Tests value={props.tests}/>
    </>
  )
}

export default Practice
