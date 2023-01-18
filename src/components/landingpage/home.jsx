import React from 'react'
import { useMediaQuery } from 'react-responsive'

//Assets
import headbar from '../../assets/Header(Mirror).png'
import poplogo from '../../assets/Logo Pop White.png'
import teampop from '../../assets/Team.png'


// const isPhoneOrPc = useMediaQuery({
//   query: "(max-width: 1000px)",
// });


const home = () => {
  return (
    <div style={{ backgroundColor: "#0E34B0" }} className="text-white min-h-screen ">
      <div className="">
        <img src={headbar} alt="" width="100%" />
      </div>
      <div className="justify-start ml-20 mb-4 ">
        <ul>
          <li><a href="#">Home</a> | <a href="#">We're Project</a> | <a href="#">Package</a> | <a href="#">Service</a> | <a href="#">Clients</a> | <a href="#">About Us</a></li>
        </ul>
        <div className="mr-20 mb-20 flex justify-end">
        <img src={poplogo} alt="" width="6%" />
      </div>
      </div>
      <div className="mr-20 mt-10 flex justify-end">
        <div className="justify-start text-right mt-10 mr-5">
        <p className="text-8xl mb-5">Hi,</p>
          <p className="text-6xl mb-3">We Are</p>
          <p className="text-4xl">Friends Now!</p>
          <p className="text-2xl mt-5">@popcreativelabs</p>
          <p className="pt-40 pb-5 space-y-3 italic font-light text-base">Instagram Content Creator | Brand Identity | Graphic Design</p>
        </div>
        <img className="float-right" src={teampop} alt="" width="55%"/>
      </div>
      
   </div>
  )
}
export default home