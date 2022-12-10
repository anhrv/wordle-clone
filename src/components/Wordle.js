import { useEffect, useState } from "react";
import Title from "./Title";
import WordleBody from "./WordleBody";

const Wordle = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://api.datamuse.com/words?sp=?????")
      .then((res) => {
        if (res.status !== 200) {
          alert("Server is reporting an error.");
        }
        res.json().then((words) => {
          const randomWord =
            words[Math.floor(Math.random() * words.length)].word;
          setSolution(randomWord);
        });
      })
      .catch((error) => {
        alert(error);
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
