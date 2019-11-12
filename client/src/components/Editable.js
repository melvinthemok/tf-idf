import React from "react"
import "./Editable.css"

import { UnControlled as CodeMirror } from "react-codemirror2"
import "codemirror/mode/python/python"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material-ocean.css"

const Editable = props => {
  const { value, handleChange, submit, isLocked } = props

  return (
    <div className="Editable">
      <p>Edit this code...</p>
      <CodeMirror
        value={value}
        options={{
          indentWithTabs: true,
          lineNumbers: true,
          lineWrapping: true,
          mode: "python",
          theme: "material-ocean"
        }}
        // to avoid calling handleChange twice for each change
        onChange={(editor, data, v) => v !== value && handleChange(v)}
        // to avoid cursor skipping to end when value changes
        autoCursor={false}
      />
      <button
        onClick={submit}
        disabled={isLocked}
      >
        Submit
      </button>
    </div>
  )
}

export default Editable
