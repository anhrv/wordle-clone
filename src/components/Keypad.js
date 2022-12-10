const Keypad = ({ usedKeys, currentGuess, setCurrentGuess }) => {
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
  ];

  const handleClick = (key) => {
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => {
        return prev + key;
      });
    }
  };

  return (
    <div className="keypad">
      {letters.map((letter, i) => {
        const color = usedKeys[letter.key];
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
