import React from "react";
import Reveal from "./Reveal";

type TitleProps = {
  title: string;
  subtitle?: string;
};

function Title({ title, subtitle }: TitleProps) {
  return (
    <Reveal>
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-4 inline-block">
          <h1 className="inline-block border-b pb-2 font-ubuntu text-4xl text-brand-one md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="absolute left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-brand-one"></div>
          <div className="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-brand-one"></div>
        </div>
        {subtitle ? (
          <h4 className="text-center text-white">{subtitle}</h4>
        ) : null}
      </div>
    </Reveal>
  );
}

export default Title;
