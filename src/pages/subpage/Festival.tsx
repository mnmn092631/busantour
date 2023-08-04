import React, { useState, useEffect } from "react";
import { ContentContainer } from "styles/subpage/utils";
import { FestivalData } from "types/api";
import apiService from "api";
import CustomCalendar from "components/CustomCalendar";
import PageTitle from "components/subpage/PageTitle";

const Festival = () => {
  const [festivals, setFestivals] = useState<FestivalData[]>();

  useEffect(() => {
    const getFestival = async () => {
      try {
        const response: FestivalData[] = await apiService.festivalService.getFestival();
        setFestivals(response);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get festival");
      }
    };
    getFestival();
  }, []);

  return (
    <>
      {festivals && <PageTitle pageName="지역축제" imgSrc={festivals[0].main_img_n} imgName={festivals[0].name} />}
      <ContentContainer>
        <CustomCalendar />
      </ContentContainer>
    </>
  );
};

export default Festival;
