import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalCategory, ModalViewImg, ModalViewTitle } from "styles/components/modal";

const FestivalModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.festivals.find(festival => festival.id === dataId));

  if (!data) return null;
  const { main_img_n, name, category, tags, startDate, end_date, subname, place } = data;

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
        {startDate} ~ {end_date}
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
