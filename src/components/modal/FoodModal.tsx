import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalAddr, ModalCategory, ModalViewImg, ModalViewTitle } from "styles/components/modal";

const FoodModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.foods.find(food => food.id === dataId));

  if (!data) return null;
  const { main_img_n, name, category, addr, itemcntnts, likecnt } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <ModalViewTitle>
        <ModalCategory>{category}</ModalCategory>
        {name}
      </ModalViewTitle>
      <ModalAddr>{addr}</ModalAddr>
      <p>{itemcntnts}</p>
      <p>{likecnt}</p>
    </>
  );
};

export default FoodModal;
