import React from "react"

import { CONTENT_PART } from "../lib/constants"

type TheoryProps = {
  content: CONTENT_PART
}

const Theory = (props: TheoryProps) => {
  return (
    <div dangerouslySetInnerHTML={props.content} />
  )
}

export default Theory
