import React, { useState } from "react";

import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoBrowsers } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [icon, setIcon] = useState(false);
  const Changeicon = () => {
    setIcon(!icon);
  };
  const nav = [
    { to: "support", name: "Support" },
    { to: "premium", name: "Premium" },
    { to: "download", name: "Download" },
  ];
  return (
    <>
      <nav className="flex fixed bg-black  text-white gap-4 h-[60px] items-center md:w-[100%] reltive px-2 w-full max-w-[14020px]">
        <BsSpotify className="  text-3xl" />
        <IoHome className="text-3xl ml-4 hover:scale-110 transition-transform duration-300 ease-in-out " />
        <div className="lg:w-[500px] bg-gray-900 h-[40px] flex items-center rounded-l-2xl rounded-r-2xl hover:border-2 hover:border-white active:border-2  w-[200px] ">
          <CiSearch className="text-white ml-2 text-2xl " />
          <input
            className="ml-3 w-[100px] h-[20px]   focus:none outline-none border-r-2 border-r-white md:w-[400px] lg:h-[20px] pr-4"
            placeholder="What do you want to play?"
          ></input>
          <IoBrowsers className="ml-2 text-2xl pr-2" />
        </div>
        <div className="text-gray-300  gap-4  ml-40 border-r-2 border-r-white w-[250px] hidden md:flex">
          <h1 className="hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out ">
            <Link to="support">Support</Link>
          </h1>
          <h1 className="hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out">
            <Link to="premium">Premium</Link>
          </h1>
          <h1 className="hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out">
            <Link to="download">Download</Link>
          </h1>
        </div>
        <div className="md:flex gap-[20px] text-gray-300 ml-[10px] items-center hidden">
          <div className="flex items-center  hover:scale-110 transition-transform duration-300 ease-in-out">
            <MdOutlineFileDownload />
            <h1 className="hover:text-white font-semibold ">Install App</h1>
          </div>
          <h1 className="hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out ml-[10px]">
            <Link to="signup">Sign up</Link>
          </h1>
          <button className="bg-white text-black h-[40px] w-[100px] font-bold hover:scale-110 transition-transform duration-300 ease-in-out ml-[10px] rounded-3xl">
            Log in
          </button>
        </div>
        <button
          onClick={Changeicon}
          className="w-[30px]  ml-12 text-2xl lg:hidden"
        >
          {icon ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>

        {/* ..mobile view */}
        {icon && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col">
            {/* Cross Icon */}
            <div className="flex justify-end p-4">
              <RxCross1
                className="text-3xl text-white cursor-pointer"
                onClick={Changeicon}
              />
            </div>

            {/* Nav Items */}
            <div className="flex flex-col items-center gap-6 mt-10 text-white text-lg">
              {nav.map((item, key) => (
                <Link
                  key={key}
                  to={item.to}
                  onClick={() => setIcon(false)}
                  className="hover:text-gray-400 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
