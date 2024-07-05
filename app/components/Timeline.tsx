import React from "react";

type TimelineProps = {
  data: {
    companyName: string;
    designation: string;
    serviceYearRange: string;
    achievements: string[];
  }[];
};

function Timeline({ data }: TimelineProps) {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <div className="flex gap-8">
            <div className="relative w-1 bg-brand-one">
              <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[41%] rounded bg-brand-one"></div>
            </div>
            <div className={idx === data.length - 1 ? "pb-12" : "pb-24"}>
              <h1 className="font-ubuntu text-2xl text-brand-one">
                {item.designation}
              </h1>
              <h4 className="font-ibm-plex-mono text-sm italic text-white">
                {item.companyName}
              </h4>
              <h6 className="mb-4 font-ibm-plex-mono text-brand-one">
                {item.serviceYearRange}
              </h6>
              <ul className="font-ibm-plex-mono text-sm text-white">
                {item.achievements.map((achievement) => {
                  return <li key={achievement}>{achievement}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Timeline;
