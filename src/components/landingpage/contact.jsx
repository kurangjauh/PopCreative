import React from "react";
import { useMediaQuery } from "react-responsive";
import PopCreative from "../../assets/Logo Pop Blue.png";
import Insta from "../../assets/Insta-blue.png";
import Email from "../../assets/Mail-blue.png";
import Map from "../../assets/Place-blue.png";
import Footer from "../../assets/Footer Mirror.png";

const Contact = () => {
  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  const listContactUsPopCreative = [
    {
      id: 1,
      logo: Insta,
      text: "@popcreativee",
      link: "www.google.com",
    },
    {
      id: 2,
      logo: Email,
      text: "popcreativee@gmail.com",
      link: "www.google.com",
    },
    {
      id: 3,
      logo: Map,
      text: "Cianjur, Indonesia",
      link: "www.google.com",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFF9EA" }}>
      <div className="pc:flex pc:justify-around pc:items-center">
        <div className="phone:flex phone:justify-center">
          {/*  wrap all left side */}
          <div className="">
            {/* wrap all content at left side */}
            <div className="phone:mx-4 phone:mt-7 phone:mb-2 phone:flex phone:justify-center">
              {/* logo */}
              <img
                src={PopCreative}
                alt="tes1"
                style={{
                  width: isPhoneOrPc ? "100px" : "120px",
                  height: isPhoneOrPc ? "120px" : "140px",
                }}
              />
            </div>
            <div className="phone:flex phone:justify-center">
              <p className="text-[#0E34B0]">
                <span className="phone:text-[70px]">P</span>
                <span className="phone:text-[50px]">OP</span>
                <span className="phone:text-[70px]">C</span>
                <span className="phone:text-[50px]">REATIVE</span>
              </p>
            </div>
            <div className="phone:flex phone:justify-center phone:text-center">
              {/* text */}
              <i className="text-[#0E34B0] phone:text-xs pc:text-sm">
                Instagram Content Creator | Logo & Brand Identity | Graphic
                Design
              </i>
            </div>
          </div>
        </div>
        <div className="phone:flex phone:justify-center phone:p-1 phone:my-7 pc:my-0 pc:p-0">
          {/* wrap all right side */}
          <div className="">
            {/* wrap all content */}
            <div className="phone:flex phone:justify-center phone:py-3 pc:justify-start">
              {/* div for #contact us! */}
              <p className="text-[#0E34B0] phone:text-2xl pc:text-6xl">
                # Contact US!
              </p>
            </div>
            <div className="pc:flex justify-center">
              {/* div for contact info */}
              <div className="phone:px-6 pc:px-0">
                {listContactUsPopCreative.map((elements) => {
                  return (
                    <ul key={elements.id}>
                      <li className="phone:flex phone:p-1 phone:gap-x-1 pc:p-3 pc:gap-x-2">
                        <img
                          src={elements.logo}
                          alt=""
                          style={{
                            width: isPhoneOrPc ? "20px" : "35px",
                            height: isPhoneOrPc ? "20px" : "35px",
                          }}
                        />
                        <div className="phone:flex phone:items-center">
                          <p className="text-[#0E34B0] phone:text-base">
                            {elements.text}
                          </p>
                          <a
                            href={elements.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {elements.text}
                          </a>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src={Footer} alt="" width="100%" />
      </div>
    </div>
  );
};

export default Contact;
