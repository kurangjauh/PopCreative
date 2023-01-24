import React from "react";
import { useMediaQuery } from "react-responsive";

//assets
import anchorlogo from "../../assets/anchor round.png";
import iground from "../../assets/Instagram round.png";

const Popular = () => {
  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div
      style={{ backgroundColor: "#fff9ea" }}
      className="max-h-fit whitespace-normal pb-32"
    >
      <div className="flex justify-center pc:text-6xl phone:text-[42px] phone:text-center pt-20 phone:grid-cols-1">
        <p style={{ color: "#0e34b0 " }}>
          #Our<span style={{ color: "#ed6a55" }}> Popular </span>Categories
        </p>
      </div>
      {isPhoneOrPc ? (
        <div className="flex justify-center pc:pt-20 phone:pt-10 pc:space-x-10 w-auto h-80 phone:flex phone:flex-col pc:flex-row">
          <div className="">
            {/* wrap 2 logos */}
            <div className="phone:flex phone:justify-center phone:gap-x-5">
              <a
                href="#"
                style={{ color: "#0e34b0" }}
                className="phone:flex phone:items-center pc:pt-32 pc:text-4xl"
              >
                Desain Grafis
              </a>
              <img
                src={anchorlogo}
                style={{
                  width: isPhoneOrPc ? "120px" : "250px",
                  height: isPhoneOrPc ? "120px" : "250px",
                }}
              />
            </div>
            <div className="phone:flex phone:justify-center phone:gap-x-5">
              <img
                src={iground}
                style={{
                  width: isPhoneOrPc ? "120px" : "250px",
                  height: isPhoneOrPc ? "120px" : "250px",
                }}
              />
              <a
                href="#"
                style={{ color: "#0e34b0" }}
                className="phone:flex phone:items-center pc:pt-32 pc:text-4xl"
              >
                Social Media
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center pc:pt-20 phone:pt-10 pc:space-x-10 phone:space-x-5 w-auto h-80">
          <a href="#" style={{ color: "#0e34b0" }} className="pt-32 text-4xl">
            Desain Grafis
          </a>
          <img
            src={anchorlogo}
            style={{
              width: isPhoneOrPc ? "120px" : "250px",
              height: isPhoneOrPc ? "120px" : "250px",
            }}
          />
          <img
            src={iground}
            style={{
              width: isPhoneOrPc ? "120px" : "250px",
              height: isPhoneOrPc ? "120px" : "250px",
            }}
          />
          <a href="#" style={{ color: "#0e34b0" }} className="pt-32 text-4xl">
            Social Media
          </a>
        </div>
      )}
    </div>
  );
};

export default Popular;
