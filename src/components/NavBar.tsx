import React, { useEffect, useState } from "react";
import navIcon from "../assets/solana-image.png";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-5 bg-[#090B1C] flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <img src={navIcon} alt="" className="w-12" />
        <p className="text-white text-[18px] font-semibold">SOLANA DAPP BOT</p>
      </div>

      {isMobile && (
        <div className="bg-[#00ADFD] p-2 rounded-md  shadow-md">
          <FaBars size={30} color="white" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
