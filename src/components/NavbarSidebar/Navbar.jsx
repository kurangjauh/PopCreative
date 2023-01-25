import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

//Assets
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'
import poplogo from '../../assets/Logo Pop White.png'
import headbar from '../../assets/Header(Mirror).png'

const Navbar = () => {
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
    <div style={{ backgroundColor: "#0E34B0" }} className="text-white max-h-screen pb-1" id="home">
        <div className="">
            <img src={headbar} alt="" width="100%" />
        </div>
        <div className="justify-start pc:ml-20 pc:mb-4 desc">
        <div className="flex justify-start m-3">
          {isPhoneOrPc ? (
            <div className="py-2">
              <div className="fixed justify-center">
                {showSidebar ? (
                  <div>
                    <div className="flex justify-center ">
                      <ImCancelCircle onClick={handleSidebar} size={'20px'}/>
                    </div>
                    <div className="grid justify-center">
                      <ul className="grid grid-cols-1">
                        <li>
                          <a href="/home">Home</a>
                        </li>
                        <hr/>
                        <li>
                          <a href="#">Our Project</a>
                        </li>
                        <hr/>
                        <li>
                          <a href="https://drive.google.com/file/d/1rMeGIISydAR4aocJh53pOCecUUDFhZ2c/view?usp=sharing" target="_blank" rel="norefferer">Package</a>
                        </li>
                        <hr/>
                        <li>
                          <a href="#service">Service</a>
                        </li>
                        <hr/>
                        <li>
                          <a href="/client">Clients</a>
                        </li>
                        <hr/>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <GiHamburgerMenu onClick={handleSidebar} size={'24px'}/>
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
                <a href="/client">Clients</a>
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
    </div>
  )
}

export default Navbar