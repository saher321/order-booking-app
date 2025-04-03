import React from "react";

function Icons({icon, iconStyle}) {
        console.log(iconStyle)
  return (
    <span className={iconStyle.footerIcon}>
      <i class={`${icon} text-sm text-slate-800 hover:text-white`}></i>
    </span>
  );
}

export default Icons;
