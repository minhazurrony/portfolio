import Image from "next/image";
import React from "react";
import { IoIosLink } from "react-icons/io";

type ProjectCardProps = {
  name: string;
  imageUrl: string;
};

function ProjectCard({ name, imageUrl }: ProjectCardProps) {
  return (
    <div className="group">
      <div className="relative mb-4 rounded-xl bg-bg-two hover:cursor-pointer">
        <div className="absolute left-[50%] top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-brand-one/50 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100">
          <button className="group rounded-full border-2 border-brand-one bg-bg-two px-6 py-6 font-ubuntu text-white shadow-xl transition-all duration-300 ease-in hover:bg-brand-one hover:text-grey">
            <IoIosLink className="text-xl" />
          </button>
        </div>
        <Image
          src={imageUrl}
          alt=""
          height={450}
          width={450}
          className="rounded-xl brightness-50 transition-all duration-300 ease-in hover:brightness-75"
          style={{ height: "350px", width: "100%", objectFit: "cover" }}
        />
      </div>
      <h3 className="text-center font-ubuntu text-xl capitalize text-white transition-all duration-300 ease-in group-hover:text-brand-one">
        {name}
      </h3>
    </div>
  );
}

export default ProjectCard;
