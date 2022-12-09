const EndMess = ({ isCorrect, solution }) => {
  return (
    <div className="endmess">
      {isCorrect && (
        <div>
          <h1>You won! :)</h1>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Better luck next time!</h1>
          <p className="solution">The answer was {solution}</p>
        </div>
      )}
    </div>
  );
};

export default EndMess;
