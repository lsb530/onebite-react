// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다
import { useState } from "react";
import useInput from "../hooks/useInput";

// const state = useState()

// // function getInput() { // 커스텀 훅을 사용하려면 use를 접두사로 사용해야됨
// function useInput() { // 커스텀 훅을 사용하려면 use를 접두사로 사용해야됨
//   const [input, setInput] = useState("")
//   const onChange = (e) => setInput(e.target.value)
//
//   return [input, onChange]
// }

const HookExam = () => {
  // if(true) {
  //   const state = useState()
  // }
  //
  // for(;;) {
  //   const state = useState()
  // }

  // const [input, setInput] = useState("")
  // const onChange = (e) => setInput(e.target.value)

  // const [input, onChange] = getInput()
  const [input, onChange] = useInput()
  const [input2, onChange2] = useInput()

  // return <div>hookexam</div>
  return (<div>
    <input value={input} onChange={onChange}/>
    <input value={input2} onChange={onChange2}/>
  </div>)
}

export default HookExam