// function getInput() { // 커스텀 훅을 사용하려면 use를 접두사로 사용해야됨
import { useState } from "react";

function useInput() { // 커스텀 훅을 사용하려면 use를 접두사로 사용해야됨
  const [input, setInput] = useState("")
  const onChange = (e) => setInput(e.target.value)

  return [input, onChange]
}

export default useInput