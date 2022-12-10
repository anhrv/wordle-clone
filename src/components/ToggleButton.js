import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitch = (e) => {
    if (e.currentTarget.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  useEffect(() => {
    if (checked) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [checked]);

  return (
    <div className="toggle">
      <span className=""> &#9788;</span>
      <input onChange={handleSwitch} type="checkbox" id="toggle" />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default ToggleButton;
