import React, { useEffect, useState } from "react";
import { CardContainer, ContentContainer } from "styles/subpage/utils";
import { FoodData } from "types/api";
import apiService from "api";
import Pagination from "components/Pagination";
import PageTitle from "components/subpage/PageTitle";
import CategorySelect from "components/subpage/CategorySelect";
import Card from "components/subpage/Card";

const Foods = () => {
  const [foods, setFoods] = useState<FoodData[]>();
  const [numPage, setNumPage] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;
  const [selectFood, setSelectFood] = useState<string>("전체");
  const [selectedFoodId, setSelectedFoodId] = useState<number>(0);
  const foodCate = ["전체", "한식", "중식", "일식", "아세안요리", "양식", "카페&베이커리", "해산물", "그릴"];

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
      {foods && <PageTitle pageName="맛집정보" imgSrc={foods[2].main_img_n} imgName={foods[2].name} />}
      <ContentContainer>
        <CategorySelect categories={foodCate} state={selectFood} setState={setSelectFood} />
        <CardContainer>
          {foods &&
            foods
              .filter(food => {
                if (selectFood === "전체") return food;
                else return food.category === selectFood;
              })
              .slice(offset, offset + 12)
              .map(food => (
                <Card item={food} selectedStateId={selectedFoodId} setSelectedStateId={setSelectedFoodId} />
              ))}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Foods;
