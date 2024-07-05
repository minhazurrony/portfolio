import React from "react";

type TitleProps = {
  title: string;
  subtitle?: string;
};

function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-4 inline-block">
        <h1 className="inline-block border-b pb-2 font-ubuntu text-6xl text-brand-one">
          {title}
        </h1>
        <div className="absolute left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-brand-one"></div>
        <div className="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-brand-one"></div>
      </div>
      {subtitle ? (
        <h4 className="text-center font-ibm-plex-mono text-white">
          {subtitle}
        </h4>
      ) : null}
    </div>
  );
}

export default Title;
