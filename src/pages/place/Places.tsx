import React, { useState } from "react";
import {
  CardContainer,
  ContentContainer,
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
  tags: string | null;
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
  const [selectGugun, setSelectGugun] = useState<string>("전체");
  const gugun = ["전체", "북구", "강서구", "부산진구", "연제구", "서구", "금정구", "사상구", "동구", "영도구"];

  const getPlace = async () => {
    try {
      const response: PlaceData[] = await getData("/busanplace");
      console.log(response);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get user");
    }
  };

  return (
    <>
      <TitleContainer>
        <img src={tempimg1} alt="임시" />
        <Title>관광명소</Title>
      </TitleContainer>
      <ContentContainer>
        <button onClick={getPlace}>버튼</button>
        <SelectContainer>
          {gugun.map((gu, idx) => (
            <SelectItem key={idx} onClick={() => setSelectGugun(gu)} $active={selectGugun === gu}>
              {gu}
            </SelectItem>
          ))}
        </SelectContainer>
        <CardContainer></CardContainer>
      </ContentContainer>
    </>
  );
};

export default Places;
