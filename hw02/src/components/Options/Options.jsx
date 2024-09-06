
// eslint-disable-next-line react/prop-types
const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
  return (
    <div>
      
          

        <button className = "Good" onClick = {() => updateFeedback("Good")}>
            Good
        </button>

        <button className = "Neutral" onClick = {() => updateFeedback("Neutral")}>
            Neutral
        </button>

        <button className = "Bad" onClick = {() => updateFeedback("Bad")}>
            Bad
      </button>
      
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  )
}

export default Options
