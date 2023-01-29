import React from 'react'
import { useMediaQuery } from 'react-responsive'

//Components
import Navbar from '../../components/NavbarSidebar/Navbar'
import Footer from '../../components/Footer/Footer'

const index = () => {
  return (
    <div style={{ backgroundColor: "#0E34B0" }} className="text-white min-h-screen">
        <Navbar/>
        
        <Footer/>
    </div>
  )
}

export default index