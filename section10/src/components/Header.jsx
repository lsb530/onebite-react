import React, { memo } from 'react';
import './Header.css'

const Header = () => {
  // console.log('Header 렌더링')
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// const memoizedHeader = memo(Header)

// export default Header
// export default memoizedHeader
export default memo(Header)
