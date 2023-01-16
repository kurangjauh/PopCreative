import React from "react"

//Components 
import Home from './components/landingpage/home'
import Popular from './components/landingpage/popular'


//Fonts
import "../src/fonts/KGHAPPY.ttf"
import "../src/fonts/KGHAPPYShadows.ttf"
import "../src/fonts/KGHAPPYSolid.ttf"

const App =() =>{
  return (
      <>
        <Home />
        <Popular />
      </>
  )
}

export default App
