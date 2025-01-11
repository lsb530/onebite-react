const Button = ({ text, color }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  )
}

Button.defaultProps = {
  color: "black"
}

export default Button