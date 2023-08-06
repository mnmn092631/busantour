import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalAddr, ModalCategory, ModalViewImg, ModalViewTitle } from "styles/components/modal";

const TourModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.tours.find(tour => tour.id === dataId));

  if (!data) return null;
  const { main_img_n, name, category, addr, tags } = data;
  const tagList = tags.split(", ");

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <ModalViewTitle>
        <ModalCategory>{category}</ModalCategory>
        {name}
      </ModalViewTitle>
      <ModalAddr>{addr}</ModalAddr>
      <p>
        {tagList.map((item, idx) => (
          <button key={idx}>#{item}</button>
        ))}
      </p>
    </>
  );
};

export default TourModal;
