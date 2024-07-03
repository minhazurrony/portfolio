import React from "react";
import { BiMouse } from "react-icons/bi";

function ScrollBottom() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <BiMouse className="text-brand-one text-4xl" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[6px] w-[2px] bg-white"></div>
        <div className="h-[10px] w-[10px] rotate-45 bg-white"></div>
      </div>
    </div>
  );
}

export default ScrollBottom;
