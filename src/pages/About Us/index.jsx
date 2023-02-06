import React from 'react'
import { useMediaQuery } from 'react-responsive'

//Component
import Navbar from "../../components/NavbarSidebar/Navbar"
import Footer from "../../components/Footer/Footer"

const index = () => {
  return (
    <div style={{ backgroundColor: "#FFF9EA" }} className="text-white min-h-screen">
      <Navbar />
      <div className="flex justify-center pc:text-6xl phone:text-[42px] phone:text-center pt-20 phone:grid-cols-1 pb-4">
        <p style={{ color: "#0E34B0 " }} className="phone:pl-2"> About<span style={{ color: "#ed6a55" }}> Us </span> </p>
      </div>
      <div className="container mx-auto text-center text-[11px] text-black py-2 border-2">
        <p>
          Established in 2020, Pop Creative Labs aiming to became a Home for Creative Ecosystem in Cianjur, West Java, Indonesia. Starting from zero, Pop Creative wants to achieve 
        </p>
      </div>
      <hr/>
      <Footer />
    </div>
  )
}

export default index