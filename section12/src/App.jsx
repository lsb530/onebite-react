import './App.css'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
  const navigate = useNavigate();
  const onClickButton = () => navigate("/new")

  return (
    <>
      <div>
        {/*assets에서 접근: 최적화 O(data URI)*/}
        <img src={getEmotionImage(1)}/>
        <img src={getEmotionImage(2)}/>
        <img src={getEmotionImage(3)}/>
        <img src={getEmotionImage(4)}/>
        <img src={getEmotionImage(5)}/>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>

        {/*SPA 방식으로 작동 안함. blink(깜박임 발생)*/}
        {/*<a href="/">Home</a>*/}
        {/*<a href="/new">New</a>*/}
        {/*<a href="/diary">Diary</a>*/}
      </div>
      <button onClick={onClickButton}>
        New 페이지로 이동
      </button>
      <Routes>
        {/*<div>Routes 내부는 Route만 쓸 수 있다</div>*/}
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
