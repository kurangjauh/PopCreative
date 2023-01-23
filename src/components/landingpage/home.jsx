import React from 'react'
import { useMediaQuery } from 'react-responsive'

//Assets
import headbar from '../../assets/Header(Mirror).png'
import poplogo from '../../assets/Logo Pop White.png'
import teampop from '../../assets/Team.png'


const home = () => {
  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  return (
    <div style={{ backgroundColor: "#0E34B0" }} className="text-white min-h-screen" id="home">
      <div className="">
        <img src={headbar} alt="" width="100%" />
      </div>
      <div className="justify-start pc:ml-20 pc:mb-4 desc">
        <a href="/home" className="hover:text-red-500">Home</a> | 
        <a href="#" className="hover:text-red-500"> Our Project</a> | 
        <a href="https://drive.google.com/file/d/1rMeGIISydAR4aocJh53pOCecUUDFhZ2c/view?usp=sharing" target="_blank" rel="norefferer" className="hover:text-red-500"> Package</a> | 
        <a href="#service" className="hover:text-red-500"> Service</a> | 
        <a href="#" className="hover:text-red-500"> Clients</a> | 
        <a href="#" className="hover:text-red-500"> About Us</a>
        <div className="pc:mr-20 phone:mr-10 mb-20 flex justify-end">
          <img src={poplogo} alt="" className="pc:hover:drop-shadow-2xl pc:w-[6%] phone:w-1/6 " /> 
        </div>
      </div>
      <div className="pc:mr-20 mt-10 flex justify-end">
        <div className="justify-start pc:text-right pc:mt-10 pc:mr-5 phone:pl-5">
          <p className="pc:text-8xl pc:mb-5 phone:text-[48px]">Hi,</p>
          <p className="pc:text-6xl pc:mb-3 phone:text-[32px]">We Are</p>
          <p className="pc:text-4xl phone:text-[29px]">Friends Now!</p>
          <p className="pc:text-2xl pc:mt-5">@popcreativelabs</p>
          <p className="pt-40 pc:text-base phone:text-[10px] pc:pb-5 space-y-3 italic font-light phone:text-center">Instagram Content Creator | Brand Identity | Graphic Design</p>
        </div>
        <img className="pc:float-right pc:w-[55%]  pc:visible" src={teampop} alt=""/>
      </div> 
   </div>
  )
}
export default home