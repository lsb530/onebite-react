import './App.css'
import { useState } from "react";

const Bulb = ({ light }) => {
  // 자신이 갖는 state가 변경되지 않고 부모로부터 받는 props가 변경되면 리렌더링됨
  console.log(light)
  return <div>{light === 'ON' ?
    <h1 style={{
      backgroundColor: 'orange'
    }}>ON</h1> :
    <h1 style={{
      backgroundColor: 'gray'
    }}>OFF</h1>}
  </div>
}

function App() {
  // const state = useState();
  // console.log(state)
  // 0: value(initial)
  // 1: fn

  // Re-rendering
  const [count, setCount] = useState(0)
  const [light, setLight] = useState("OFF")

  return (
    <>
      <div>
        <Bulb light={light}/>
        <button onClick={() => setLight(light === 'ON' ? 'OFF' : 'ON')}>
          {/*전구 끄기/켜기*/}
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
      </div>
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

export default App
