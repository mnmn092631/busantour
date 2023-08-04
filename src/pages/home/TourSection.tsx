import React, { useEffect, useRef, useState } from "react";
import apiService from "api";
import { SectionTitle, Tag, TagContainer, TourContainer } from "styles/pages/home/tourStyle";
import { TourTagsData } from "types/api";

const TourSection = () => {
  const [tags, setTags] = useState<TourTagsData[]>();

  useEffect(() => {
    const getTourTags = async () => {
      try {
        const response: TourTagsData[] = await apiService.tourService.getTourTags();
        setTags(response);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get tour tags");
      }
    };
    getTourTags();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = scrollRef.current;
    const scrollWidth = scroll.scrollWidth;
    const clientWidth = scroll.clientWidth;
    scroll.scrollTo({ left: (scrollWidth - clientWidth) / 2 });

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      if (scroll.scrollLeft + e.deltaY > 0 && scroll.scrollLeft + e.deltaY <= scrollWidth - clientWidth) {
        e.preventDefault();
      }
      scroll.scrollTo({
        left: scroll.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    scroll.addEventListener("wheel", e => onWheel(e));
    return () => scroll.removeEventListener("wheel", e => onWheel(e));
  }, [tags]);

  return (
    <TourContainer>
      <SectionTitle>#테마여행</SectionTitle>
      <TagContainer ref={scrollRef}>{tags && tags.map((tag, idx) => <Tag key={idx}>{tag.tagWord}</Tag>)}</TagContainer>
    </TourContainer>
  );
};

export default TourSection;
