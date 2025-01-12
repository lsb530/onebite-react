import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`)
  }, [count, input]);
  // 의존성 배열, dependency array, deps

  const onClickButton = (value) => {
    setCount(count + value) // 비동기로 동작함(호출만, 완료 X)
    // console.log(count) // 변경되기 이전의 값이 나옴
  }

  return (
    <div className={"App"}>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
      </section>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
