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

interface GetPlace {
  id: number;
  name: string;
}

const Places = () => {
  const [selectGugun, setSelectGugun] = useState<string>("전체");
  const gugun = ["전체", "북구", "강서구", "부산진구", "연제구", "서구", "금정구", "사상구", "동구", "영도구"];

  const getPlace = async (): Promise<GetPlace> => {
    try {
      const response = await getData<GetPlace>("/busanplace");
      console.info(response);
      return response.result;
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
