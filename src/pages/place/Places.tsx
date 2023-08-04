import React, { useEffect, useState } from "react";
import apiService from "api";
import Pagination from "components/Pagination";
import {
  Card,
  CardCategory,
  CardContainer,
  CardContent,
  CardImg,
  CardTitle,
  CloseBtn,
  ContentContainer,
  SelectContainer,
  SelectItem,
  Title,
  TitleContainer,
} from "styles/pages/subpage/utils";
import { PlaceData } from "types/api";

const Places = () => {
  const [places, setPlaces] = useState<PlaceData[]>();
  const [numPage, setNumPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;
  const [selectGugun, setSelectGugun] = useState<string>("전체");
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>(0);
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

  useEffect(() => {
    setSelectedPlaceId(0);
  }, [page]);

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
                <Card
                  key={place.id}
                  // 전체일 때 1, 자신이 선택된 경우 2, 그 외 3
                  $active={selectedPlaceId === 0 ? 1 : place.id === selectedPlaceId ? 2 : 3}
                  onClick={() => setSelectedPlaceId(place.id)}
                >
                  <CloseBtn
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedPlaceId(0);
                    }}
                  />
                  <CardImg src={place.main_img_n} alt={place.name} />
                  <div>
                    <CardTitle>
                      <CardCategory $category={category[place.category]}>{place.category}</CardCategory>
                      {place.name}
                    </CardTitle>
                    <CardContent>{place.addr1}</CardContent>
                    <div></div>
                  </div>
                </Card>
              ))}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Places;
