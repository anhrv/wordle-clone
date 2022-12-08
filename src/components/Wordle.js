import { useEffect, useState } from "react";
import Title from "./Title";
import WordleBody from "./WordleBody";

const Wordle = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://api.datamuse.com/words?sp=?????")
      .then((res) => res.json())
      .then((words) => {
        const randomWord = words[Math.floor(Math.random() * words.length)].word;
        setSolution(randomWord);
      });
  }, []);

  return (
    <div>
      <Title />
      {solution && <WordleBody solution={solution} />}
    </div>
  );
};

export default Wordle;
