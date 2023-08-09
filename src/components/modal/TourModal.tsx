import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalAddr, ModalViewImg, ModalViewTitle } from "styles/components/modal";

const TourModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.tours.find(tour => tour.id === dataId));

  if (!data) return null;
  const { main_img_n, name, addr, tagsArr } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <ModalViewTitle>{name}</ModalViewTitle>
      <ModalAddr>{addr}</ModalAddr>
      <p>{tagsArr && tagsArr.map((item: string, idx: number) => <button key={idx}>#{item}</button>)}</p>
    </>
  );
};

export default TourModal;
