import React from "react"

//Components 
import Home from './components/landingpage/home'
import Popular from './components/landingpage/popular'
import Kenapa from './components/landingpage/kenapa'
import Contact from './components/landingpage/contact'


//Fonts
import "../src/fonts/KGHAPPY.ttf"
import "../src/fonts/KGHAPPYShadows.ttf"
import "../src/fonts/KGHAPPYSolid.ttf"

const App =() =>{
  return (
      <>
        <Home />
        <Popular />
        <Kenapa />
        <Contact />
      </>
  )
}

export default App
