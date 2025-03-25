import React, { useState } from "react";
import FlagDropdown from "./FlagDropdown";

const Header = () => {

    const [show, setShow] = useState(false)

  const dropdown = () => {
    setShow(!show)
  };

  return (
    <>
      <div className="flex justify-between items-center p-2 ">
        <div>
          <img
            className=" w-24"
            src="https://demo.storeking.xyz/images/required/theme-logo.png"
          />
        </div>
        <div className="flex justify-around py-[2px] bg-slate-50 rounded-3xl border  w-96 ">
          <i class="fa-brands fa-searchengin self-center text-base text-gray-600"></i>

          <input
            className=" bg-transparent outline-0 border-none w-10/12 p-[2px] text-zinc-900 text-base"
            placeholder="search ..."
            color="black"
          />
        </div>
        <div className="flex justify-between w-80 ">
          <button
            onClick={() => dropdown()}
            className="relative  text-sm cursor-pointer text-zinc-900 capitalize font-semibold "
          >
            {show && <FlagDropdown />}
            <i class="fa-solid fa-flag-checkered mr-2 bg-blue-100 py-1 px-2  rounded-full text-red-600 text-sm"></i>
            english
            <i class="fa-solid fa-angle-down text-sm ml-2 text-zinc-800"></i>
          </button>
          <p className=" text-sm cursor-pointer text-zinc-900 capitalize font-semibold ">
            <i class="fa-regular fa-heart mr-2 bg-green-500 py-1 px-2  rounded-full text-white text-sm"></i>
            favorite
          </p>
          <p className=" text-sm cursor-pointer text-zinc-900 capitalize font-semibold ">
            <i class="fa-regular fa-user mr-2 bg-green-500 py-1 px-2  rounded-full text-white text-sm"></i>
            account
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
