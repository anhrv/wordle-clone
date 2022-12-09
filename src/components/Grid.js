import Row from "./Row";

const Grid = ({ currentGuesses, guesses, turn }) => {
  return (
    <div>
      {guesses.map((guess, i) => {
        return <Row key={i} />;
      })}
    </div>
  );
};

export default Grid;
