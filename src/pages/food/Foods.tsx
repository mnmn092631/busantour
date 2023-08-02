import React, { useEffect, useState } from "react";
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
import { FoodData } from "src/types/api";
import apiService from "src/api";
import Pagination from "src/components/Pagination";

const Foods = () => {
  const [foods, setFoods] = useState<FoodData[]>();
  const [numPage, setNumPage] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;
  const [selectFood, setSelectFood] = useState<string>("전체");
  const foodcate = ["전체", "한식", "중식", "일식", "아세안요리", "양식", "카페&베이커리", "해산물", "그릴"];

  useEffect(() => {
    const getFoods = async () => {
      try {
        const response: FoodData[] = await apiService.foodService.getFood();
        setFoods(response);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get foods");
      }
    };
    getFoods();
  }, []);

  useEffect(() => {
    setPage(1);
    foods &&
      setNumPage(
        Math.ceil(
          foods.filter(food => {
            if (selectFood === "전체") return food;
            else return food.category === selectFood;
          }).length / 12,
        ),
      );
  }, [foods, selectFood]);

  return (
    <>
      <TitleContainer>
        {foods && <img src={foods[2].main_img_n} alt={foods[2].name} />}
        <Title>맛집정보</Title>
      </TitleContainer>
      <ContentContainer>
        <SelectContainer>
          {foodcate.map((cate, idx) => (
            <SelectItem key={idx} onClick={() => setSelectFood(cate)} $active={selectFood === cate}>
              {cate}
            </SelectItem>
          ))}
        </SelectContainer>
        <CardContainer>
          {foods &&
            foods
              .filter(food => {
                if (selectFood === "전체") return food;
                else return food.category === selectFood;
              })
              .slice(offset, offset + 12)
              .map(food => (
                <Card key={food.id} to={`${food.id}`}>
                  <CardImg src={food.main_img_n} alt={food.name} />
                  <CardTitle>{food.name}</CardTitle>
                  <CardContent>{food.address1}</CardContent>
                </Card>
              ))}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Foods;
