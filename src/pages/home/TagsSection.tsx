import React, { useEffect, useRef } from "react";
import { SectionTitle, Tag, TagContainer, TourContainer } from "styles/home/tourStyle";

const TagsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = scrollRef.current;
    const scrollWidth = scroll.scrollWidth;
    const clientWidth = scroll.clientWidth;
    scroll.scrollTo({ left: 150 });

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
  }, []);

  return (
    <TourContainer>
      <SectionTitle>#테마여행</SectionTitle>
      <TagContainer ref={scrollRef}>
        <Tag />
      </TagContainer>
    </TourContainer>
  );
};

export default TagsSection;
