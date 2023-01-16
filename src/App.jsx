import React from "react";

//Fonts
import "../src/fonts/KGHAPPY.ttf";
import "../src/fonts/KGHAPPYShadows.ttf";
import "../src/fonts/KGHAPPYSolid.ttf";

//Components
import Home from "./components/landingpage/home"
import Popular from "./components/landingpage/Popular";
import Kenapa from "./components/landingpage/Kenapa.jsx";
import Contact from "./components/landingpage/contact.jsx";

const App = () => {
  return (
    <>
      <Home />
      <Popular />
      <Kenapa />
      <Contact />
    </>
  );
};

export default App;
