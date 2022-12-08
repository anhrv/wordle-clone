import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const WordleBody = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      solution-{solution}
      <br />
      guess-{currentGuess}
    </div>
  );
};

export default WordleBody;
