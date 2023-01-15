import React, { useEffect, useState } from "react";
import Give from "../../assets/Give.png";
import Ideas from "../../assets/Ideas.png";
import Like from "../../assets/Like.png";
import Time from "../../assets/24H.png";
import Refund from "../../assets/Card.png";
import Whatsapp from "../../assets/Whatsapp-blue.png";
import { useMediaQuery } from "react-responsive";
import { Shake } from "reshake";
const Kenapa = () => {
  const cardContent = [
    {
      id: 1,
      logo: Give,
      title: "Harga Terjangkau",
      text: "Bikin dan cari pilihan desain kamu sesuai budget yang kamu punya. Varian harga yang luas untuk kebutuhan desain kamu yang professional.",
    },
    {
      id: 2,
      logo: Ideas,
      title: "Service Terbaik",
      text: "Jaminan Kualitas desain kami pastikan. Jaringan desainer kami sudah melalui verifikasi skill dan trend yang tinggi.",
    },
    {
      id: 3,
      logo: Like,
      title: "Pembayaran Aman",
      text: "Transaksi pembayaran yang aman melalui website kami, terverifikasi. Bisa bayar pakai gopay/ovo/m-banking",
    },
    {
      id: 4,
      logo: Time,
      title: "Layanan Professional 24/7",
      text: "Pop Creative selalu bersamamu. Hubungi kami melalui apa saja, whatsapp, atau web-chat. Penjualan, Konsultasi, hingga Pusat Resolusi. Kita siap membantu!",
    },
    {
      id: 5,
      logo: Refund,
      title: "Refund Service",
      text: "Jangan takut investasi-mu terbuang percuma. Pusat Resolusi kami siap memastikan desain-mu jadi akan sesuai ekspetasi. 100% refund service*.",
    },
  ];

  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div
      style={{ backgroundColor: "#0E34B0" }}
      className="text-white min-h-screen"
    >
      {/* wrap all content "Kenapa" */}
      <div className="flex justify-center">
        {/* text kenapa popcreativee */}
        <p className="phone:text-lg pc:text-6xl flex font-bold phone:mx-2 phone:my-4 pc:mx-5 pc:mt-16 pc:mb-24">
          #Kenapa @popcreativee
          <Shake
            h={0}
            v={0}
            r={61}
            dur={1000}
            int={51}
            max={100}
            fixed={true}
            fixedStop={false}
            freez={false}
          >
            <span>?</span>
          </Shake>
        </p>
      </div>
      <div className="grid phone:grid-cols-1 pc:grid-cols-5 justify-items-center gap-x-1">
        {/* wrap all items */}
        {cardContent.map((elements) => {
          return (
            <li key={elements.id} className="list-none phone:p-8 pc:p-7">
              <div>
                {/* wrap each item */}
                <div className="grid justify-items-center">
                  <img
                    src={elements.logo}
                    alt="tes1"
                    style={{
                      width: isPhoneOrPc ? "65px" : "120px",
                      height: isPhoneOrPc ? "65px" : "120px",
                    }}
                  />
                </div>
                <div className="grid justify-items-center text-center p-3 phone:text-lg pc:text-2xl">
                  {elements.title}
                </div>
                <div className="grid justify-items-center text-center phone:text-sm pc:text-lg">
                  {elements.text}
                </div>
              </div>
            </li>
          );
        })}
      </div>
      <div className="pb-10">
        <div className="flex phone:text-center justify-center phone:p-10">
          <p className="phone:text-sm pc:text-2xl">
            <span className="phone:text-base pc:text-4xl">YUK,</span> Mari
            konsultasikan dengan @pop creativee
          </p>
          {/* YUK, Mari konsultasikan dengan @popcreativee */}
        </div>
        <div className="flex justify-center">
          <a href="#">
            <button>
              <div className="bg-white rounded-full flex justify-center phone:p-2 pc:p-3 pc:w-[250px]">
                <div>
                  <img
                    src={Whatsapp}
                    alt="tes2"
                    style={{
                      width: isPhoneOrPc ? "24px" : "35px",
                      height: isPhoneOrPc ? "24px" : "35px",
                    }}
                  />
                </div>
                <span className="flex items-center justify-items-center phone:text-sm pc:text-lg text-[#0E34B0]">
                  Whatsapp Chat
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kenapa;
