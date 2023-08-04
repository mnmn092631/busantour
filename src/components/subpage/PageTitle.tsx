import React from "react";
import { Title, TitleContainer } from "styles/components/subpage/pageTitle";
import { PageTitleProps } from "types/subpage";

const PageTitle = ({ pageName, imgSrc, imgName }: PageTitleProps) => {
  return (
    <TitleContainer>
      <img src={imgSrc} alt={imgName} />
      <Title>{pageName}</Title>
    </TitleContainer>
  );
};

export default PageTitle;
