import './App.css'
import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF")
  // 자신이 갖는 state가 변경되지 않고 부모로부터 받는 props가 변경되면 리렌더링됨
  console.log(light)
  return (
    <div>{light === 'ON' ?
      <h1 style={{
        backgroundColor: 'orange'
      }}>ON</h1> :
      <h1 style={{
        backgroundColor: 'gray'
      }}>OFF</h1>}
      <button onClick={() => setLight(light === 'ON' ? 'OFF' : 'ON')}>
        {/*전구 끄기/켜기*/}
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}>
          +
        </button>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Bulb/>
      <Counter/>
    </>
  )
}

export default App
