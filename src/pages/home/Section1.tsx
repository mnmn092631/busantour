import React, { useEffect, useRef, useState } from "react";
import tempimg1 from "../../assets/축제1.jpg";
import tempimg2 from "../../assets/축제2.jpg";
import tempimg3 from "../../assets/축제3.jpg";
import tempimg4 from "../../assets/축제4.jpg";
import { Carousel, FesCard, FesContainer, FesContent, FesDate, FesImg, FesTag, FesTags, FesTitle } from "./style";

const Section1 = () => {
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

  const flag = useRef<boolean>(false);
  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < 4) {
          flag.current = false;
          setCount(pre => pre + 1);
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
  }, [count]);

  return (
    <FesContainer>
      <Carousel count={count} ref={carouselRef}>
        {imgs.map(imgs => (
          <FesCard>
            <FesImg src={imgs} alt="축제임시사진" />
            <FesContent>
              <FesTitle>동래읍성역사축제</FesTitle>
              <FesDate>10월 13일~10월 15일</FesDate>
              <FesTags>
                {tags.map(tag => (
                  <FesTag>{`#${tag}`}</FesTag>
                ))}
              </FesTags>
            </FesContent>
          </FesCard>
        ))}
      </Carousel>
    </FesContainer>
  );
};

export default Section1;
