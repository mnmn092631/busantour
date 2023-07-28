import React from "react";
import { ContentContainer, Title, TitleContainer } from "src/styles/pages/subpage/utils";
import tempimg1 from "../../assets/축제3.jpg";

const Tour = () => {
  return (
    <>
      <TitleContainer>
        <img src={tempimg1} alt="임시" />
        <Title>테마여행</Title>
      </TitleContainer>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Tour;
