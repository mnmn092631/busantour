import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";

const FoodModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.foods.find(food => food.id === dataId));

  if (!data) return null;

  return (
    <>
      <img src={data.main_img_n} alt={data.name} />
      <h1>{data.name}</h1>
      <span>{data.addr}</span>
    </>
  );
};

export default FoodModal;
