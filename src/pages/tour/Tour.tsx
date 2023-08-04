import React, { useState, useEffect } from "react";
import { ContentContainer, Title, TitleContainer } from "styles/pages/subpage/utils";
import { TourData } from "types/api";
import apiService from "api";

const Tour = () => {
  const [tours, setTours] = useState<TourData[]>();

  useEffect(() => {
    const getTour = async () => {
      try {
        const response: TourData[] = await apiService.tourService.getTour();
        setTours(response);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get tour");
      }
    };
    getTour();
  }, []);

  return (
    <>
      <TitleContainer>
        {tours && <img src={tours[0].main_img_n} alt={tours[0].name} />}
        <Title>테마여행</Title>
      </TitleContainer>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Tour;
