import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { InstagramEmbed } from 'react-social-media-embed'

//Components
import Navbar from '../../components/NavbarSidebar/Navbar'
import Footer from '../../components/Footer/Footer'

const index = () => {
  const cardContent=[
    {
      id: 1,
      link: "https://www.instagram.com/p/CnzG0t-hrb9/",
    },
    {
      id: 2,
      link: "https://www.instagram.com/p/CngfnXuLnc8/",
    },
    {
      id: 3,
      link: "https://www.instagram.com/p/CnoGwowL4Ne/",
    },    
    {
      id: 4,
      link: "https://www.instagram.com/p/CnysEkiLE2B/",
    },    
    {
      id: 5,
      link: "https://www.instagram.com/p/Cn_svoLBdK9/",
    },    
  ];

  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div style={{ backgroundColor: "#FFF9EA" }} className="text-white min-h-screen">
      <Navbar/>
      <div className="flex justify-center pc:text-6xl phone:text-[42px] phone:text-center pt-20 phone:grid-cols-1 pb-4">
        <p style={{ color: "#0E34B0 " }} className="phone:pl-2">
          #Our<span style={{ color: "#ed6a55" }}> Project! </span>
        </p>
      </div>
      <div className="grid phone:grid-cols-1 pc:grid-cols-4 pc:gap-x-1 pl-2 pr-2 pt-10 h-auto ">
        {cardContent.map((elements) => {
          return (
            <li key={elements.id} className="list-none phone:p-8 pc:p-7">
              <div>
                <div className="grid justify-items-center">
                <InstagramEmbed url={elements.link} />
                </div>
              </div>
            </li>
          );
        })}
      </div>
      <hr/>
      <Footer/> 
    </div>
  )
}

export default index