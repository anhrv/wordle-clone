import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const WordleBody = ({ solution }) => {
  const { currentGuess, handleKeyUp } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return <div>{currentGuess}</div>;
};

export default WordleBody;
