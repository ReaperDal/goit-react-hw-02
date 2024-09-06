/* eslint-disable react/prop-types */

const Feedback = ({ feedback, totalFeedback }) => {
  console.log(totalFeedback);

  return (
      <div>
          <p>Good: { feedback.good}</p>
          <p>Neutral: { feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      <p>Total: {feedback.good + feedback.neutral + feedback.bad}</p>
      <p>Positive: {Math.round((feedback.good / totalFeedback) * 100) }%</p>
    </div>
  )
}

export default Feedback

