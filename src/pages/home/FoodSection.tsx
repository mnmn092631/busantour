import React, { useEffect } from "react";
import { CardContainer, FoodCard, FoodContainer, FoodContent, FoodImg, FoodTitle } from "styles/home/foodStyle";
import { AppState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getFoodAsync } from "store/food";

const FoodSection = () => {
  const dispatch = useDispatch();
  const foods: AppState["foods"] = useSelector((state: AppState) => state.foods);

  useEffect(() => {
    dispatch<any>(getFoodAsync());
  }, [dispatch]);

  return (
    <FoodContainer>
      <FoodTitle>부산맛집</FoodTitle>
      <CardContainer>
        {foods &&
          foods.slice(0, 8).map(food => (
            <FoodCard key={food.id}>
              <FoodImg src={food.main_img_n} alt={food.name} />
              <FoodContent>
                <h2>{food.name}</h2>
                <div>
                  <span>
                    영업시간: {food.usage_open}~{food.usage_close}
                  </span>
                  <span>주소: {food.addr}</span>
                </div>
              </FoodContent>
            </FoodCard>
          ))}
      </CardContainer>
    </FoodContainer>
  );
};

export default React.memo(FoodSection);
