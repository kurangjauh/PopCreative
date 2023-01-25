import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import Navbar from "../NavbarSidebar/Navbar"

//Assets
import teampop from '../../assets/Team.png'


const home = () => {

  //Constructor
  const isPhoneOrPc = useMediaQuery({query: "(max-width: 1000px)",});

  return (
    <div style={{ backgroundColor: "#0E34B0" }} className="text-white min-h-screen" id="home">
      <Navbar />
      <div className="pc:mr-20 mt-10 flex justify-end">
        <div className="justify-start pc:text-right pc:mt-10 pc:mr-5 phone:pl-5">
          <p className="pc:text-8xl pc:mb-5 phone:text-[48px]">Hi,</p>
          <p className="pc:text-6xl pc:mb-3 phone:text-[32px]">We Are</p>
          <p className="pc:text-4xl phone:text-[29px]">Friends Now!</p>
          <p className="pc:text-2xl pc:mt-5">@popcreativelabs</p>
          <p className="pt-40 pc:text-base phone:text-[10px] pc:pb-5 space-y-3 italic font-light phone:text-center">Instagram Content Creator | Brand Identity | Graphic Design</p>
        </div>
        {isPhoneOrPc ? (
          <img className="hidden" src={teampop} alt=""/>
        ):(
          <img className="float-right w-[55%]" src={teampop} alt=""/>
          )}
      </div> 
   </div>
  )
}
export default home