import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalContent, ModalViewImg } from "styles/components/modal";
import SubpageModalMenu from "./utils/SubpageModalMenu";
import SubpageModalTitle from "./utils/SubpageModalTitle";
import ModalComment from "./utils/ModalComment";

const PlaceModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.places.find(place => place.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;

  const {
    id,
    name,
    addr,
    category,
    categoryColor,
    homepage_u,
    trfc_info,
    hldy_info,
    usage_time,
    usage_amou,
    middle_siz,
    main_img_n,
    itemcntnts,
  } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <SubpageModalTitle url={homepage_u} categoryColor={categoryColor} category={category} name={name} addr={addr} />
      <SubpageModalMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
      {selectMenu === "상세정보" && <ModalContent>{itemcntnts}</ModalContent>}
      {selectMenu === "이용안내" && (
        <ModalContent>
          {usage_time && <p>운영요일 및 시간: {usage_time}</p>}
          {usage_amou && <p>이용요금: {usage_amou}</p>}
          {hldy_info && <p>휴무일: {hldy_info}</p>}
          {middle_siz && <p>편의시설: {middle_siz}</p>}
          {trfc_info && <p>교통정보: {trfc_info}</p>}
        </ModalContent>
      )}
      {selectMenu === "댓글" && <ModalComment type_id={id} type="place" />}
    </>
  );
};

export default PlaceModal;
