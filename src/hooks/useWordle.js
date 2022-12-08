import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuesses = () => {
    console.log("formating - ", currentGuess);
  };
  const addNewGuess = () => {};
  const handleKeyUp = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    } else if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    } else if (key === "Enter") {
      if (turn > 5) {
        console.log("used all guesses");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("tried that word");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars long");
        return;
      }
      formatGuesses();
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
