import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { DiaryStateContext } from '../App'

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime()

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, // 이전달 의 마지막 날로 설정
    23,
    59,
    59
  ).getTime()

  return data.filter((item) =>
    beginTime <= item.createdDate && item.createdDate <= endTime)
}

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date())
  const year = pivotDate.getFullYear()
  const month = pivotDate.getMonth() + 1

  const data = useContext(DiaryStateContext)
  const monthlyData = getMonthlyData(pivotDate, data)

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  return (
    <div>
      <Header
        title={`${year}년 ${month}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
        rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home