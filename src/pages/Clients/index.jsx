import React from 'react'

import Footer from "../../components/Footer/Footer"
import Navbar from '../../components/NavbarSidebar/Navbar'

const index = () => {
  return (
    <div style={{ backgroundColor: "#fff9ea" }} className="text-white min-h-screen">
        <Navbar />
        <div className="flex justify-center pc:text-6xl phone:text-[42px] phone:text-center pt-20 phone:grid-cols-1">
        <p style={{ color: "#0e34b0 " }}>
          #Our<span style={{ color: "#ed6a55" }}> Clients </span>
        </p>
      </div>

        <Footer />
    </div>
  )
}

export default index