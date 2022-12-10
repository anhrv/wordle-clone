const Keypad = ({
  usedKeys,
  currentGuess,
  setCurrentGuess,
  history,
  setMessage,
  formatGuesses,
  addNewGuess,
}) => {
  const letters = [
    { key: "a" },
    { key: "b" },
    { key: "c" },
    { key: "d" },
    { key: "e" },
    { key: "f" },
    { key: "g" },
    { key: "h" },
    { key: "i" },
    { key: "j" },
    { key: "k" },
    { key: "l" },
    { key: "m" },
    { key: "n" },
    { key: "o" },
    { key: "p" },
    { key: "q" },
    { key: "r" },
    { key: "s" },
    { key: "t" },
    { key: "u" },
    { key: "v" },
    { key: "w" },
    { key: "x" },
    { key: "y" },
    { key: "z" },
    { key: "Enter" },
    { key: "Backspace" },
  ];

  const handleClick = (key) => {
    if (key === "Enter") {
      if (history.includes(currentGuess)) {
        setMessage("Already tried");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
        return;
      }
      if (currentGuess.length !== 5) {
        setMessage("Not enough letters");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
        return;
      }
      const format = formatGuesses();
      addNewGuess(format);
    } else if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    } else {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return (
    <div className="keypad">
      {letters.map((letter, i) => {
        const color = usedKeys[letter.key];
        if (letter.key === "Enter") {
          return (
            <div
              onClick={() => handleClick(letter.key)}
              key={i}
              className="enter"
            >
              {letter.key}
            </div>
          );
        } else if (letter.key === "Backspace") {
          return (
            <div
              onClick={() => handleClick(letter.key)}
              key={i}
              className="backspace"
            >
              DELETE
            </div>
          );
        }

        return (
          <div
            onClick={() => handleClick(letter.key)}
            key={i}
            className={color}
          >
            {letter.key}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
