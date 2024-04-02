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
      className={` border  rounded  w-40  items-center  py-10 pl-10 pr-10 bg-green-300 hover:bg-inherit active:bg-blue-300 ml-[680px] mt-[200px] text-red-500 button ${
        buttonState ? "pressed" : ""
      } w-full`}
      onClick={handleClick}
    >
      Click
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
