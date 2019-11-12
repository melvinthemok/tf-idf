import React, { useState } from "react"
import "./App.css"

import Nav from "./components/Nav"
import Theory from "./components/Theory"
import Practice from "./components/Practice"

import { CONTENT, EDITABLE, HIDDEN, TESTS } from "./lib/constants"

const App = () => {
  const [currentPart, setCurrentPart] = useState(0)

  return (
    <div className="App">
      <div className="App__left">
        <h1>A vector paints a thousand words</h1>
        <p>An introduction to big data: full achievements path <a target="_blank" rel="noopener noreferrer" href={process.env.PATH_URL}>here</a></p>
        <Nav
          numberItems={CONTENT.length}
          current={currentPart}
          setCurrentItem={(number) => setCurrentPart(number)}
        />
        <Theory
          content={CONTENT[currentPart]}
        />
      </div>
      <div className="App__right">
        <Practice
          key={currentPart}
          editable={EDITABLE[currentPart]}
          hidden={HIDDEN[currentPart]}
          tests={TESTS[currentPart]}
        />
      </div>
    </div>
  )
}

export default App
