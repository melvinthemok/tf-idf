import React from "react"
import "./Tests.css"

import { UnControlled as CodeMirror } from "react-codemirror2"
import "codemirror/mode/python/python"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material-ocean.css"

const Tests = props => {
  return (
    <div className="Tests">
      <p>...to pass these tests</p>
      <CodeMirror
        value={props.value}
        options={{
          lineNumbers: true,
          lineWrapping: true,
          mode: "python",
          readOnly: true,
          theme: "material-ocean"
        }}
      />
    </div>
  )
}

export default Tests
