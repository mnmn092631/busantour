import React from "react";
import { ContentContainer, Title, TitleContainer } from "src/styles/pages/subpage/utils";
import tempimg1 from "../../assets/축제1.jpg";

const Festival = () => {
  return (
    <>
      <TitleContainer>
        <img src={tempimg1} alt="임시" />
        <Title>지역축제</Title>
      </TitleContainer>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Festival;
