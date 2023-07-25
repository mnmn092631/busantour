import React from "react";
import tempimg from "../../assets/section1_임시사진.jpg";
import { FesContainer, FesContent, FesDate, FesImg, FesTag, FesTags, FesTitle } from "./style";

const Section1 = () => {
  const tags = [
    "부산여행",
    "부산축제",
    "가을축제",
    "동래읍성",
    "역사축제",
    "동래읍성역사축제",
    "전통문화체험",
    "이색체험",
    "거리공연",
    "퍼레이드",
    "가볼만한축제",
  ];
  return (
    <FesContainer>
      <FesImg src={tempimg} alt="축제임시사진" />
      <FesContent>
        <FesTitle>동래읍성역사축제</FesTitle>
        <FesDate>10월 13일~10월 15일</FesDate>
        <FesTags>
          {tags.map(tag => (
            <FesTag>{`#${tag}`}</FesTag>
          ))}
        </FesTags>
      </FesContent>
    </FesContainer>
  );
};

export default Section1;
