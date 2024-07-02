import React, { ReactNode } from "react";

type ContainerWrapperProps = {
  children: ReactNode;
  className?: string;
};

function ContainerWrapper({ children, className }: ContainerWrapperProps) {
  return (
    <div
      className={`${className} md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[10rem] px-[1rem]`}
    >
      {children}
    </div>
  );
}

export default ContainerWrapper;
