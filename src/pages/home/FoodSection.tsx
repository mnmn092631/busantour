import React, { useState, useEffect } from "react";
import apiService from "api";
import { CardContainer, FoodCard, FoodContainer, FoodContent, FoodImg, FoodTitle } from "styles/pages/home/foodStyle";
import { FoodData } from "types/api";

const FoodSection = () => {
  const [foods, setFoods] = useState<FoodData[]>();

  useEffect(() => {
    const getFood = async () => {
      try {
        const response: FoodData[] = await apiService.foodService.getFood();
        setFoods(response.slice(0, 8));
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get food");
      }
    };
    getFood();
  }, []);

  return (
    <FoodContainer>
      <FoodTitle>부산맛집</FoodTitle>
      <CardContainer>
        {foods &&
          foods.map(food => (
            <FoodCard key={food.id}>
              <FoodImg src={food.main_img_n} alt={food.name} />
              <FoodContent>
                <h2>{food.name}</h2>
                <div>
                  <span>
                    영업시간: {food.usage_open}~{food.usage_close}
                  </span>
                  <span>주소: {food.address1}</span>
                </div>
              </FoodContent>
            </FoodCard>
          ))}
      </CardContainer>
    </FoodContainer>
  );
};

export default FoodSection;
