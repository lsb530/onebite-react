const Button = ({ text, color, children }) => {
  const onClockButton = () => {
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