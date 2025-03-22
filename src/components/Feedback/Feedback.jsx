const Feedback = ({ feedback, total, positive }) => {
  return (
    <div className="feedback">
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
};

export default Feedback;
