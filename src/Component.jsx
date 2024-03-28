import React, { useState, useContext } from "react";

// Create a context to manage the state of the button
const ButtonContext = React.createContext();

// Button Component
const Button = () => {
  const { buttonState, toggleButtonState } = useContext(ButtonContext);

  const handleClick = () => {
    toggleButtonState();
  };

  return (
    <button
      className={` text-red-500 button ${buttonState ? "pressed" : ""}`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

// App Component
const App = () => {
  const [buttonState, setButtonState] = useState(false);

  const toggleButtonState = () => {
    setButtonState((prevState) => !prevState);
  };

  return (
    <ButtonContext.Provider value={{ buttonState, toggleButtonState }}>
      <div
        className={` w-full h-screen container ${
          buttonState ? "bg-black" : ""
        }`}
      >
        <Button />
      </div>
    </ButtonContext.Provider>
  );
};

export default App;
