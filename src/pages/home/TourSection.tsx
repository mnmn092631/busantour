import apiService from "api";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionTitle, Tag, TagContainer, TourContainer } from "styles/home/tourStyle";

const TourSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTourTags = async () => {
      try {
        const { data } = await apiService.tourService.getTourTags();
        setTags(data);
      } catch (error) {
        console.error("Error fetching tourtags:", error);
      }
    };
    fetchTourTags();
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = scrollRef.current;
    const scrollWidth = scroll.scrollWidth;
    const clientWidth = scroll.clientWidth;
    scroll.scrollTo({ left: 150 });

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
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
        {tags.length !== 0 &&
          tags.slice(0, 10).map((tag, idx) => (
            <Tag key={idx} onClick={() => navigate(`/tour?cate=${tag}`)}>
              {tag}
            </Tag>
          ))}
      </TagContainer>
    </TourContainer>
  );
};

export default TourSection;
