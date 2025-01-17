import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import Button from './components/Button'
import Header from './components/Header'

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
  const navigate = useNavigate()
  const onClickButton = () => navigate('/new')

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"}/> }
        rightChild={<Button text={"Right"}/> }
      />

      <Button
        text={'123'}
        // type={'DEFAULT'}
        onClick={() => {
          console.log('123번 버튼 클릭')
        }}
      />

      <Button
        text={'123'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('123번 버튼 클릭')
        }}
      />

      <Button
        text={'123'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('123번 버튼 클릭')
        }}
      />
      <Routes>
        {/*<div>Routes 내부는 Route만 쓸 수 있다</div>*/}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
