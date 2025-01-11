const Main = () => {
  // JSX 주의사항
  // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
  // 2. 숫자, 문자열, 배열 값만 렌더링할 수 있음(객체 또한 그자체로 렌더링 안됨)
  // 3. 모든 태그는 닫혀있어야 한다
  // 4. 최상위 태그는 반드시 하나여야 한다(명시하지 않으면 spread component)
  const number = 10
  const obj = { a: 1 }

  return (
    // <div></div>
    <main>
      <h1>main</h1>
      <h2>{number}</h2>
      <h2>{number + 10}</h2>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {/*/!*{ if() {} }*!/ 자바스크립트표현식이 아님*/}
      {/*/!*{ for() {} }*!/ 위와 동일*/}
      {[1, 2, 3]}
      {true}
      {undefined}
      {null}
      {/*{obj} 오류*/}
      {obj.a}
    </main>
  )
}

export default Main