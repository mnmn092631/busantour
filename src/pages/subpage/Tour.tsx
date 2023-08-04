import React, { useState, useEffect } from "react";
import { ContentContainer } from "styles/subpage/utils";
import { TourData } from "types/api";
import apiService from "api";
import PageTitle from "components/subpage/PageTitle";

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
      {tours && <PageTitle pageName="테마여행" imgSrc={tours[1].main_img_n} imgName={tours[1].name} />}
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Tour;
