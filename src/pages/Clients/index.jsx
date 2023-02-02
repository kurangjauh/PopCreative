import React from 'react'
import { useMediaQuery } from 'react-responsive'

//Components
import Footer from "../../components/Footer/Footer"
import Navbar from '../../components/NavbarSidebar/Navbar'

//Assets
import Dalang from "../../assets/DalangWO-1.png"
import Lortem from "../../assets/Lortem.png"
import MutiaRasa from "../../assets/MutiaRasa.png"
import Elmera from "../../assets/logo item.png"
import ClubSolitaire from "../../assets/ClubSolitaire.png"
import Tersa from "../../assets/logo teras sawah-9.png"
import Yummie from "../../assets/YummieHouse.png"

const index = () => {
  const cardContent =[
    {
      id: 1,
      logo: ClubSolitaire,
      link: "https://instagr.am/clubsolitaire.id",
    },
    {
      id: 2,
      logo: Dalang,
      link: "https://instagr.am/dalangweddingorganizer/",
    },
    {
      id: 3,
      logo: Elmera,
      link: "https://instagr.am/elmeracafe/",
    },
    {
      id: 4,
      logo: Lortem,
      link: "https://instagr.am/lorongtemu/",
    },
    {
      id: 5,
      logo: MutiaRasa,
      link: "https://instagr.am/mutiarasa.id/",
    },
    {
      id: 6,
      logo: Tersa,
      link: "https://instagr.am/teras.sawah/",
    },
    {
      id: 7,
      logo: Yummie,
      link: "https://instagr.am/yummie_house/",
    },
  ];
  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div style={{ backgroundColor: "#fff9ea" }} className="text-white min-h-screen">
      <Navbar />
      <div className="flex justify-center pc:text-6xl phone:text-[42px] phone:text-center pc:pt-20 phone:pt-4 phone:grid-cols-1">
        <p style={{ color: "#0e34b0 " }} className="phone:pl-2">
          #Our <span className="text-[#ed6a55] underline">Clients </span>
        </p>
      </div>
      <div className="grid phone:grid-cols-1 pc:grid-cols-5 items-center pc:gap-x-1 pl-2 pr-2 pt-10 ">
        {cardContent.map((elements) => {
          return (
            <li key={elements.id} className="list-none phone:p-8 pc:p-7 hover:bg-blue-500 pc:border-none">
              <div>
                <div className="grid justify-items-center">
                  <a href={elements.link} target="_blank" rel="noreferrer">
                  <img
                    src={elements.logo}
                    style={{
                      width: isPhoneOrPc ? "auto" : "auto",
                      height: isPhoneOrPc ? "auto" : "auto",
                    }}
                  />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </div>
      
      <hr/>
      <Footer />
    </div>
  )
}

export default index