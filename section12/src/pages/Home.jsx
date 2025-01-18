import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'

const Home = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  return (
    <div>
      <Header
        title={`${year}년 ${month}월`}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
      <DiaryList />
    </div>
  )
}

export default Home