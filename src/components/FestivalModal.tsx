import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";

const FestivalModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.festivals.find(festival => festival.id === dataId));

  if (!data) return null;

  return (
    <>
      <img src={data.main_img_n} alt={data.name} />
      <h1>{data.name}</h1>
    </>
  );
};

export default FestivalModal;
