import "./Main.css"

const Main = () => {
  // JSX 주의사항
  // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
  // 2. 숫자, 문자열, 배열 값만 렌더링할 수 있음(객체 또한 그자체로 렌더링 안됨)
  // 3. 모든 태그는 닫혀있어야 한다
  // 4. 최상위 태그는 반드시 하나여야 한다(명시하지 않으면 spread component)

  const user = {
    name: '이승복',
    isLogin: true
  }

  if (user.isLogin) {
    return <div
      // style={
      //   {
      //     backgroundColor: "red",
      //     borderBottom: "5px solid blue"
      //   }
      // }
      className="logout"
    >로그아웃</div>
  } else {
    return <div>로그인</div>
  }

  /*return (
    <>
      {user.isLogin ?
        <div>로그아웃</div> :
        <div>로그인</div>
      }
    </>
  )*/
}

export default Main