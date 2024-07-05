import React from "react";
import { ContainerWrapper, ScrollBottom, Timeline, Title } from "@/components";

function Experiences() {
  return (
    <ContainerWrapper className="bg-bg-two p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Experience"
          subtitle="Here is a quick summary of my most recent experiences"
        />
      </div>

      <Timeline
        data={[
          {
            companyName: "ShopUp Limited",
            designation: "Software Development Engineer",
            serviceYearRange: "2022 - 2024",
            achievements: ["done x", "done y", "utilizing z"],
          },
          {
            companyName: "Japan Marketing & Consultancy Ltd.",
            designation: "Frontend Engineer",
            serviceYearRange: "2021 - 2022",
            achievements: ["done x", "done y", "utilizing z"],
          },
          {
            companyName: "Shorol Limited",
            designation: "Frontend Engineer",
            serviceYearRange: "2019 - 2021",
            achievements: ["done x", "done y", "utilizing z"],
          },
        ]}
      />
    </ContainerWrapper>
  );
}

export default Experiences;
