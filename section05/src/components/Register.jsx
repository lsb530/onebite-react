/*
  간단한 회원가입 폼
  1. 이름
  2. 생년월일
  3. 국적
  4. 자기소개
 */
import { useRef, useState } from "react";

const Register = () => {
  console.log("Register 렌더링")
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  })

  const refObj = useRef(0)
  // console.log(refObj)
  // console.log(refObj.current)

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <button onClick={() => {
        refObj.current++;
        console.log(refObj.current)
      }}>ref + 1</button>

      <div>
        <input
          name={"name"}
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name={"birth"}
          value={input.birth}
          type={"date"}
          onChange={onChange}
        />
      </div>
      <div>
        <select
          name={"country"}
          value={input.country}
          onChange={onChange}
        >
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>

      <div>
        <textarea
          name={"bio"}
          value={input.bio}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Register