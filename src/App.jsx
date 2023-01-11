import { useState } from 'react'
import './App.css'

//Fonts
// import './font/KGHAPPYSolid.ttf';
// import './font/KGHAPPY.ttf';
// import './font/KGHAPPYShadow.ttf';

//Components 
import Home from './components/landingpage/Home'
import Kenapa from './components/landingpage/Kenapa'
import Popular from './components/landingpage/Popular'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Home />
        <Popular />
        <Kenapa />
      </div>
  )
}

export default App
