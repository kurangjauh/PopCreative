import React from "react";
import { useMediaQuery } from "react-responsive";
import { InstagramEmbed } from "react-social-media-embed";

//Components
import Navbar from "../../components/NavbarSidebar/Navbar";
import Footer from "../../components/Footer/Footer";

const index = () => {
  const cardContent = [
    {
      id: 1,
      link: "https://www.instagram.com/p/ClgKWpxhaF3/?igshid=OGQ2MjdiOTE=",
    },
    {
      id: 2,
      link: "https://www.instagram.com/p/ClDOU4Pr5Fq/?igshid=OGQ2MjdiOTE=",
    },
    {
      id: 3,
      link: "https://www.instagram.com/p/Ck9-yysBhla/?igshid=OGQ2MjdiOTE=",
    },
    {
      id: 4,
      link: "https://www.instagram.com/p/CgnqWblB19g/?igshid=OGQ2MjdiOTE=",
    },
    {
      id: 5,
      link: "https://www.instagram.com/p/CGpWkhinks8/?igshid=OGQ2MjdiOTE=",
    },
    {
      id: 6,
      link: "https://www.instagram.com/p/Cn3bm2phiYz/?igshid=OGQ2MjdiOTE=",
    },
  ];

  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div
      style={{ backgroundColor: "#FFF9EA" }}
      className="text-white min-h-screen"
    >
      <Navbar />
      <div className="flex justify-center pc:text-6xl phone:text-[42px] phone:text-center pt-20 phone:grid-cols-1 pb-4">
        <p style={{ color: "#0E34B0 " }} className="phone:pl-2">
          #Our<span style={{ color: "#ed6a55" }}> Project! </span>
        </p>
      </div>
      <div className="grid phone:grid-cols-1 phone:mb-3 pc:grid-cols-4 pc:mb-5 justify-items-center">
        {/* div wrap all socmed content */}
        {cardContent.map((element) => {
          return (
            <div>
              {/* div wrap konten */}
              <li key={element.id}>
                <div
                  style={{
                    width: isPhoneOrPc ? 328 : 380,
                  }}
                  className="grid pc:px-4"
                >
                  {/* div konten */}
                  <InstagramEmbed url={element.link} width="100%" />
                </div>
              </li>
            </div>
          );
        })}
      </div>
      <div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default index;
