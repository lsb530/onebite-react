import './App.css'
import { useState } from "react";

function App() {
  // const state = useState();
  // console.log(state)
  // 0: value(initial)
  // 1: fn

  // Re-rendering
  const [state, setState] = useState(0)

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => {
        setState(state + 1)
      }}>
        +
      </button>
    </>
  )
}

export default App
