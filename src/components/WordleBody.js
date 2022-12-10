import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import EndMess from "./EndMess";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Message from "./Message";

const WordleBody = ({ solution }) => {
  const {
    currentGuess,
    setCurrentGuess,
    handleKeyUp,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    message,
    setMessage,
    history,
    formatGuesses,
    addNewGuess,
  } = useWordle(solution);

  const [end, setEnd] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      setTimeout(() => {
        setEnd(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }
    if (turn > 5) {
      setTimeout(() => {
        setEnd(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        usedKeys={usedKeys}
      />
      <Keypad
        usedKeys={usedKeys}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        history={history}
        setMessage={setMessage}
        formatGuesses={formatGuesses}
        addNewGuess={addNewGuess}
      />
      {end && <EndMess isCorrect={isCorrect} solution={solution} />}
      {message && <Message message={message} />}
    </div>
  );
};

export default WordleBody;
