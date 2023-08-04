import React, { useState, useEffect } from "react";
import { ContentContainer, Title, TitleContainer } from "styles/pages/subpage/utils";
import { FestivalData } from "types/api";
import apiService from "api";
import CustomCalendar from "components/subpage/CustomCalendar";

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
      <TitleContainer>
        {festivals && <img src={festivals[0].main_img} alt={festivals[0].name} />}
        <Title>지역축제</Title>
      </TitleContainer>
      <ContentContainer>
        <CustomCalendar />
      </ContentContainer>
    </>
  );
};

export default Festival;
