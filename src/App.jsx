import React, { useState, createContext, useContext, Component } from "react";

import Container from "./Container";

export const DarkModeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const sunnyToggleNight = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, sunnyToggleNight }}>
      <div
        className={`${darkMode && "dark"}  `}
      >
        <div className="h-screen w-full bg-[#faf9f9] dark:bg-[#070707]">
          <div className="  container relative flex items-center justify-center w-full h-[100vh]">
            <Container />
            <div></div>
          </div>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;
