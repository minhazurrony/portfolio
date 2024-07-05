import React from "react";

type TimelineItem = {
  organization: string;
  designation: string;
  serviceYearRange: string;
  achievements: string[];
};

type TimelineProps = {
  data: TimelineItem[];
};

type TimelineDetailsProps = {
  data: TimelineItem[];
  index: number;
};

const TimelineDetails = ({ data, index }: TimelineDetailsProps) => {
  const dataLength = data.length - 1;

  return (
    <div className="flex-1">
      <div
        className={`rounded-xl bg-bg-one p-12 ${dataLength === index ? "mb-0" : "mb-8"}`}
      >
        <h1 className="font-ubuntu text-2xl text-brand-one">
          {data[index].designation}
        </h1>
        <h4 className="font-ibm-plex-mono text-sm italic text-white">
          {data[index].organization}
        </h4>
        <h6 className="mb-4 font-ibm-plex-mono text-brand-one">
          {data[index].serviceYearRange}
        </h6>
        <ul className="list-disc font-ibm-plex-mono text-sm text-white">
          {data[index].achievements.map((achievement) => {
            return (
              <li key={achievement} className="mb-4">
                {achievement}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function Timeline({ data }: TimelineProps) {
  return (
    <>
      {data.map((_, idx) => {
        const isEvenIndex = (idx + 1) % 2 === 0;

        return (
          <div className="flex justify-between gap-8">
            {!isEvenIndex ? (
              <TimelineDetails data={data} index={idx} />
            ) : (
              <div className="hidden flex-1 lg:block"></div>
            )}

            <div className="relative -order-1 w-1 bg-brand-one lg:order-none">
              <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[41%] rounded-full bg-brand-one"></div>
            </div>
            <>
              {isEvenIndex ? (
                <TimelineDetails data={data} index={idx} />
              ) : (
                <div className="hidden flex-1 lg:block"></div>
              )}
            </>
          </div>
        );
      })}
    </>
  );
}

export default Timeline;
