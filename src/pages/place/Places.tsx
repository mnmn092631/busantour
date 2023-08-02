import React, { useEffect, useState } from "react";
import apiService from "src/api";
import Pagination from "src/components/Pagination";
import {
  Card,
  CardCategory,
  CardContainer,
  CardContent,
  CardImg,
  CardTitle,
  ContentContainer,
  SelectContainer,
  SelectItem,
  Title,
  TitleContainer,
} from "src/styles/pages/subpage/utils";
import { PlaceData } from "src/types/api";

const Places = () => {
  const [places, setPlaces] = useState<PlaceData[]>();
  const [numPage, setNumPage] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;
  const [selectGugun, setSelectGugun] = useState<string>("전체");
  const gugun = [
    "전체",
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ];
  const category: { [key: string]: number } = { 공원: 1, 문화: 2, 역사: 3, 자연: 4, 체험: 5 };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await apiService.placeService.getPlace();
        setPlaces(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlaces();
  }, []);

  useEffect(() => {
    setPage(1);
    places &&
      setNumPage(
        Math.ceil(
          places.filter(place => {
            if (selectGugun === "전체") return place;
            else return place.gugun === selectGugun;
          }).length / 12,
        ),
      );
  }, [places, selectGugun]);

  return (
    <>
      <TitleContainer>
        {places && <img src={places[0].main_img_n} alt={places[0].name} />}
        <Title>관광명소</Title>
      </TitleContainer>
      <ContentContainer>
        <SelectContainer>
          {gugun.map((gu, idx) => (
            <SelectItem key={idx} onClick={() => setSelectGugun(gu)} $active={selectGugun === gu}>
              {gu}
            </SelectItem>
          ))}
        </SelectContainer>
        <CardContainer>
          {places &&
            places
              .filter(place => {
                if (selectGugun === "전체") return place;
                else return place.gugun === selectGugun;
              })
              .slice(offset, offset + 12)
              .map(place => (
                <Card key={place.id} to={`${place.id}`}>
                  <CardImg src={place.main_img_n} alt={place.name} />
                  <CardTitle>
                    <CardCategory $category={category[place.category]}>{place.category}</CardCategory>
                    {place.name}
                  </CardTitle>
                  <CardContent>{place.addr1}</CardContent>
                </Card>
              ))}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Places;
