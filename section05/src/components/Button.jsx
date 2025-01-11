const Button = ({ text, color, children }) => {
  const onClockButton = (e) => {
    console.log(e) // SyntheticBaseEvent: 합성이벤트객체(크로스브라우징)
    console.log(text)
  }

  return (
    <button
      // onClick={() => {
      //   console.log(text)
      // }}
      onClick={onClockButton}
      // onMouseEnter={onClockButton}
      style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: "black"
}

export default Button