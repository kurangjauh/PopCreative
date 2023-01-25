import React from 'react'

import SectionHome from "../../components/LandingPage/SectionHome"
import SectionService from "../../components/LandingPage/SectionService"
import SectionPopular from "../../components/LandingPage/SectionPopular"
import Footer from "../../components/Footer/Footer"

const index = () => {
  return (
    <>
      <SectionHome />
      <SectionPopular />
      <SectionService />  
      <Footer />
    </>
    

  )
}

export default index