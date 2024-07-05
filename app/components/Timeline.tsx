import React from "react";

type TimelineItem = {
  companyName: string;
  designation: string;
  serviceYearRange: string;
  achievements: string[];
};

type TimelineProps = {
  data: TimelineItem[];
};

const TimelineDetails = ({
  designation,
  companyName,
  serviceYearRange,
  achievements,
}: TimelineItem) => {
  return (
    <>
      <h1 className="font-ubuntu text-2xl text-brand-one">{designation}</h1>
      <h4 className="font-ibm-plex-mono text-sm italic text-white">
        {companyName}
      </h4>
      <h6 className="mb-4 font-ibm-plex-mono text-brand-one">
        {serviceYearRange}
      </h6>
      <ul className="font-ibm-plex-mono text-sm text-white">
        {achievements.map((achievement) => {
          return <li key={achievement}>{achievement}</li>;
        })}
      </ul>
    </>
  );
};

function Timeline({ data }: TimelineProps) {
  return (
    <>
      {data.map((item, idx) => {
        const isEvenIndex = (idx + 1) % 2 === 0;

        return (
          <div className="flex justify-between gap-8">
            <div className="flex-1 pb-[128px]">
              {!isEvenIndex ? (
                <div className="flex flex-col items-end">
                  <div>
                    <TimelineDetails {...item} />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="relative w-1 bg-brand-one">
              <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[41%] rounded-full bg-brand-one"></div>
            </div>
            <div className="flex-1 pb-[128px]">
              {isEvenIndex ? <TimelineDetails {...item} /> : null}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Timeline;
