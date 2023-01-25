import React from "react"

//Fonts
import "../src/fonts/KGHAPPY.ttf"
import "../src/fonts/KGHAPPYShadows.ttf"
import "../src/fonts/KGHAPPYSolid.ttf"

//Components
import LandingPage from "./pages/LandingPage/index"
import Client from "./pages/Clients/index"

const App = () => {
  return (
      <>
        <LandingPage />
        {/* <Client /> */}
      </>
  )
}


export default App;
