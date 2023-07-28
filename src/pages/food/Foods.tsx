import React, { useState } from "react";
import { ContentContainer, SelectContainer, SelectItem, Title, TitleContainer } from "src/styles/pages/subpage/utils";
import tempimg1 from "../../assets/축제4.jpg";

const Foods = () => {
  const [selectFood, setSelectFood] = useState<string>("전체");
  const foods = ["전체", "한식", "중식", "일식"];
  return (
    <>
      <TitleContainer>
        <img src={tempimg1} alt="임시" />
        <Title>맛집정보</Title>
      </TitleContainer>
      <ContentContainer>
        <SelectContainer>
          {foods.map((food, idx) => (
            <SelectItem key={idx} onClick={() => setSelectFood(food)} $active={selectFood === food}>
              {food}
            </SelectItem>
          ))}
        </SelectContainer>
      </ContentContainer>
    </>
  );
};

export default Foods;
