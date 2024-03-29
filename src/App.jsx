import { Component, createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { About, Home, Profile, NoteFound } from "./pages";
import Header from "./components/Header";

export const AppRouter = createContext();

const App = () => {
  const [name, setName] = useState("Asqar");

  return (
    <AppRouter.Provider value={{ name, setName }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NoteFound />} />
      </Routes>
    </AppRouter.Provider>
  );
};

export default App;
