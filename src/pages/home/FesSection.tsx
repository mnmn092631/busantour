import React, { useEffect, useRef, useState } from "react";
import {
  BtnContainer,
  Carousel,
  FesCard,
  FesContainer,
  FesContent,
  FesDate,
  FesImg,
  FesSubTitle,
  FesTitle,
  PageBtn,
} from "src/styles/pages/home/fesStyle";
import { getData } from "src/api";

interface FestivalData {
  id: number;
  gugun: string;
  name: string;
  subname: string;
  type: string;
  startDate: Date;
  end_date: Date;
  place: string;
  hosting_method: string;
  tags: string;
  main_img: string;
}

const FesSection = () => {
  const [festivals, setFestivals] = useState<FestivalData[]>([]);
  const [count, setCount] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getFestival = async () => {
    try {
      const response: FestivalData[] = await getData<FestivalData[]>("/busanfestival/upcoming");
      setFestivals(response.concat(response[0]));
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get user");
    }
  };

  useEffect(() => {
    getFestival();
  }, []);

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
        {festivals.map((fes, idx) => (
          <FesCard key={idx}>
            <FesImg src={fes.main_img} alt={fes.name} />
            <FesContent>
              <FesTitle>{fes.name}</FesTitle>
              <FesDate>{`${fes.startDate}~${fes.end_date}`}</FesDate>
              <FesSubTitle>{fes.subname}</FesSubTitle>
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
