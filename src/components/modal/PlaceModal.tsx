import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalAddr, ModalCategory, ModalViewImg, ModalViewTitle } from "styles/components/modal";

const PlaceModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.places.find(place => place.id === dataId));

  if (!data) return null;
  const { main_img_n, name, category, addr, tags, itemcntnts } = data;
  const tagList = tags.split(", ");
  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <ModalViewTitle>
        <ModalCategory>{category}</ModalCategory>
        {name}
      </ModalViewTitle>
      <ModalAddr>{addr}</ModalAddr>
      <p>{itemcntnts}</p>
      <p>
        {tagList.map((item, idx) => (
          <button key={idx}>#{item}</button>
        ))}
      </p>
    </>
  );
};

export default PlaceModal;
