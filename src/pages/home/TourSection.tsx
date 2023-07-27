import React, { useEffect, useRef, useState } from "react";
import { SectionTitle, Tag, TagContainer, TourContainer } from "./styles/tourStyle";

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

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;
    scroll.scrollTo({ left: (scroll.scrollWidth - scroll.clientWidth) / 2 });
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      if (scroll.scrollLeft + e.deltaY > 0 && scroll.scrollLeft + e.deltaY <= scroll.scrollWidth - scroll.clientWidth)
        e.preventDefault();
      scroll.scrollTo({
        left: scroll.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };
    scroll.addEventListener("wheel", e => onWheel(e));
    return () => scroll.removeEventListener("wheel", e => onWheel(e));
  }, []);

  return (
    <TourContainer>
      <SectionTitle>#테마여행</SectionTitle>
      <TagContainer ref={scrollRef}>
        {tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </TagContainer>
    </TourContainer>
  );
};

export default TourSection;
