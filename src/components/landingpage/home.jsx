import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

//Assets
import headbar from '../../assets/Header(Mirror).png'
import poplogo from '../../assets/Logo Pop White.png'
import teampop from '../../assets/Team.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'




const home = () => {

  {/* constructor */}
  const isPhoneOrPc = useMediaQuery({query: "(max-width: 1000px)",});
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    setShowSidebar(true);
    console.log(showSidebar);
    if (showSidebar === true) {
      setShowSidebar(false);
      console.log(showSidebar);
    }
  };

  return (
    <div style={{ backgroundColor: "#0E34B0" }} className="text-white min-h-screen" id="home">
      <div className="">
        <img src={headbar} alt="" width="100%" />
      </div>
      <div className="justify-start pc:ml-20 pc:mb-4 desc">
        <div className="flex justify-start m-3">
          {isPhoneOrPc ? (
            <div className="py-2">
              <div className="flex justify-center">
                {showSidebar ? (
                  <div>
                    <div className="flex justify-center py-2">
                      <ImCancelCircle onClick={handleSidebar} />
                    </div>
                    <div className="grid justify-center py-3 mx-3">
                      <ul className="grid grid-cols-1">
                        <li>
                          <a href="/home">Home</a>
                        </li>
                        <li>
                          <a href="#">Our Project</a>
                        </li>
                        <li>
                          <a href="https://drive.google.com/file/d/1rMeGIISydAR4aocJh53pOCecUUDFhZ2c/view?usp=sharing" target="_blank" rel="norefferer">Package</a>
                        </li>
                        <li>
                          <a href="#service">Service</a>
                        </li>
                        <li>
                          <a href="#">Clients</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <GiHamburgerMenu onClick={handleSidebar} />
                )}
              </div>
            </div>
          ) : (
            <ul className="flex gap-x-3 ">
              <li class="hover:text-red-500">
                <a href="/home">Home</a>
              </li>
              |
              <li class="hover:text-red-500">
                <a href="#">Our Project</a>
              </li>
              |
              <li class="hover:text-red-500">
                <a href="https://drive.google.com/file/d/1rMeGIISydAR4aocJh53pOCecUUDFhZ2c/view?usp=sharing" target="_blank" rel="norefferer">Package</a>
              </li>
              |
              <li class="hover:text-red-500">
                <a href="#service">Service</a>
              </li>
              |
              <li class="hover:text-red-500">
                <a href="#">Clients</a>
              </li>
              |
              <li class="hover:text-red-500">
                <a href="#">About Us</a>
              </li>
            </ul>
          )}
        </div>
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
        <img className="pc:float-right pc:w-[55%]  pc:visible phone:display-none" src={teampop} alt=""/>
      </div> 
   </div>
  )
}
export default home