import React, { useEffect, useState } from "react";
import {
  Card,
  CardCategory,
  CardContainer,
  CardContent,
  CardImg,
  CardTitle,
  ContentContainer,
  PageBtn,
  Pagination,
  SelectContainer,
  SelectItem,
  Title,
  TitleContainer,
} from "src/styles/pages/subpage/utils";
import tempimg1 from "../../assets/축제2.jpg";
import { getData } from "src/api";

interface PlaceData {
  id: number;
  name: string;
  gugun: string;
  lat: string;
  lng: string;
  travel_place: string;
  title: string;
  subtitle: string;
  addr1: string;
  place_category: string;
  tags: string;
  homepage_u: string;
  trfc_info: string;
  usage_day: string;
  hldy_info: string;
  usage_time: string;
  usage_amou: string;
  middle_siz: string;
  main_img_n: string;
  main_img_t: string;
  itemcntnts: string;
  geometry: string;
}

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

  const getPlace = async () => {
    try {
      const response: PlaceData[] = await getData<PlaceData[]>("/busanplace");
      setPlaces(response);
      setNumPage(Math.ceil(response.length / 12));
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get user");
    }
  };

  useEffect(() => {
    getPlace();
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
                    <CardCategory $category={category[place.place_category]}>{place.place_category}</CardCategory>
                    {place.name}
                  </CardTitle>
                  <CardContent>{place.addr1}</CardContent>
                </Card>
              ))}
        </CardContainer>
      </ContentContainer>
      <Pagination>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;prev
        </button>
        {Array(numPage)
          .fill(null)
          .map((_, i) => (
            <PageBtn key={i} onClick={() => setPage(i + 1)} $active={i + 1 === page}>
              {i + 1}
            </PageBtn>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPage}>
          next&gt;
        </button>
      </Pagination>
    </>
  );
};

export default Places;
