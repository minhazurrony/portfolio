import React from "react";
import { BiMouse } from "react-icons/bi";
import Reveal from "./Reveal";

function ScrollBottom() {
  return (
    <Reveal>
      <div className="flex flex-col items-center justify-center gap-4">
        <BiMouse className="text-4xl text-brand-one" />
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
    </Reveal>
  );
}

export default ScrollBottom;
