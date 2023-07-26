import React, { useEffect, useRef, useState } from "react";
import tempimg1 from "../../assets/축제1.jpg";
import tempimg2 from "../../assets/축제2.jpg";
import tempimg3 from "../../assets/축제3.jpg";
import tempimg4 from "../../assets/축제4.jpg";
import {
  BtnContainer,
  Carousel,
  FesCard,
  FesContainer,
  FesContent,
  FesDate,
  FesImg,
  FesTag,
  FesTags,
  FesTitle,
  PageBtn,
} from "./fesStyle";

const FesSection = () => {
  const imgs = [tempimg1, tempimg2, tempimg3, tempimg4, tempimg1];
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

  const [count, setCount] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const flag = useRef<boolean>(false);
  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < 4) {
          flag.current = false;
          setCount(pre => pre + 1);
          setCurrentPage(pre => (pre + 1) % 4);
        } else {
          flag.current = true;
          setCount(0);
        }
      },
      flag.current ? 0 : 3000,
    );

    return () => {
      clearInterval(timer);
    };
  }, [count, currentPage]);

  const movePage = (page: number): void => {
    let difPage = page - currentPage;
    if (page === 0) difPage += 4;
    setCurrentPage(prev => prev + difPage);
    setCount(prev => prev + difPage);
  };

  return (
    <FesContainer>
      <Carousel $count={count} ref={carouselRef}>
        {imgs.map((img, idx) => (
          <FesCard key={idx}>
            <FesImg src={img} alt="축제임시사진" />
            <FesContent>
              <FesTitle>동래읍성역사축제</FesTitle>
              <FesDate>10월 13일~10월 15일</FesDate>
              <FesTags>
                {tags.map((tag, idx) => (
                  <FesTag key={idx}>{`#${tag}`}</FesTag>
                ))}
              </FesTags>
            </FesContent>
          </FesCard>
        ))}
      </Carousel>
      <BtnContainer>
        <PageBtn $active={currentPage === 0 || currentPage === 4} onClick={() => movePage(0)} />
        <PageBtn $active={currentPage === 1} onClick={() => movePage(1)} />
        <PageBtn $active={currentPage === 2} onClick={() => movePage(2)} />
        <PageBtn $active={currentPage === 3} onClick={() => movePage(3)} />
      </BtnContainer>
    </FesContainer>
  );
};

export default FesSection;
