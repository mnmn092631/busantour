import React from "react";
import { SectionTitle, Tag, TagContainer, TourContainer } from "./tourStyle";

const TourSection = () => {
  const tags = [
    "덕후투어",
    "봄여행",
    "부산당일코스",
    "인생샷",
    "자전거투어",
    "부산야경투어",
    "자연",
    "부산일주일여행",
    "반려견과함께",
    "전시관",
    "부산2박3일코스",
    "부산이색여행",
    "감성사진",
    "모노레일",
  ];
  return (
    <TourContainer>
      <SectionTitle>#테마여행</SectionTitle>
      <TagContainer>
        {tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </TagContainer>
    </TourContainer>
  );
};

export default TourSection;
