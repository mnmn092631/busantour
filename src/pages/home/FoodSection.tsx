import React, { useEffect } from "react";
import { CardContainer, FoodCard, FoodContainer, FoodContent, FoodImg, FoodTitle } from "styles/home/foodStyle";
import { AppState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getFoodAsync } from "store/food";
import { useNavigate } from "react-router-dom";

const FoodSection = () => {
  const dispatch = useDispatch();
  const foods: AppState["foods"] = useSelector((state: AppState) => state.foods);
  const foodCate = ["한식", "중식", "일식", "아세안요리", "양식", "카페&베이커리", "해산물", "그릴"];
  const navigate = useNavigate();

  useEffect(() => {
    dispatch<any>(getFoodAsync());
  }, [dispatch]);

  if (foods.length === 0) return null;

  return (
    <FoodContainer>
      <FoodTitle>부산맛집</FoodTitle>
      <CardContainer>
        {foodCate.map((cate, idx) => (
          <FoodCard key={idx} onClick={() => navigate(`/food?cate=${cate}`)}>
            <FoodImg
              src={foods.filter(food => food.category === cate)[0].main_img_n}
              alt={foods.filter(food => food.category === cate)[0].name}
            />
            <FoodContent>{cate}</FoodContent>
          </FoodCard>
        ))}
      </CardContainer>
    </FoodContainer>
  );
};

export default React.memo(FoodSection);
