import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const WordleBody = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } =
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
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        usedKeys={usedKeys}
      />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
};

export default WordleBody;
