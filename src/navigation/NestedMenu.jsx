import React, { useState } from "react";
import { cleaningSubMenuData, foodSubMenuData, nestedMenuData } from "../utils/objectData/navdata";

function NestedMenu() {
  const [subMenu, setSubMenu] = useState();

  // console.log(nestedMenuData)
  return (
    <div className=" absolute mt-1 w-40 bg-slate-100 border border-slate-200 rounded-md p-2">
      {nestedMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => setSubMenu(index)}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}

      {subMenu == 0 ? <Foods /> : subMenu == 1 ? <Cleaning /> : ""}

    </div>
  );
}

const Foods = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-200 ">
      {foodSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onMouseEnter={()=>console.log('enter')}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>
            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}


    </div>
  );
};
const Cleaning = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {cleaningSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

export default NestedMenu;
