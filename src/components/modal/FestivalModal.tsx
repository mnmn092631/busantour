import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalCategory, ModalViewImg, ModalViewTitle } from "styles/components/modal";

const FestivalModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.festivals.find(festival => festival.id === dataId));

  if (!data) return null;
  const { main_img_n, name, category, tags, startDate, endDate, subname, place } = data;

  const tagList = tags.split(", ");

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <ModalViewTitle>
        <ModalCategory>{category}</ModalCategory>
        {name}
      </ModalViewTitle>
      <p> {subname}</p>
      <p>
        {startDate.toISOString().slice(0, 10)} ~ {endDate.toISOString().slice(0, 10)}
      </p>
      <p>{place}</p>
      <p>
        {tagList.map((item, idx) => (
          <button key={idx}>#{item}</button>
        ))}
      </p>
    </>
  );
};

export default FestivalModal;
