import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalContent, ModalInfo, ModalViewImg } from "styles/components/modal";
import SubpageModalMenu from "./SubpageModalMenu";
import SubpageModalTitle from "./SubpageModalTitle";
import ModalComment from "./ModalComment";

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
    likecnt,
  } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <SubpageModalTitle
        url={homepage_u}
        likecnt={likecnt}
        categoryColor={categoryColor}
        category={category}
        name={name}
        addr={addr}
      />
      <SubpageModalMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
      {selectMenu === "상세정보" && <ModalContent>{itemcntnts}</ModalContent>}
      {selectMenu === "이용안내" && (
        <ModalInfo>
          <p>운영요일 및 시간 : {usage_time}</p>
          {usage_amou && <p>이용요금 : {usage_amou}</p>}
          {hldy_info && <p>휴무일 : {hldy_info}</p>}
          {middle_siz && <p>편의시설 : {middle_siz}</p>}
          <p>교통정보 : {trfc_info}</p>
        </ModalInfo>
      )}
      {selectMenu === "댓글" && <ModalComment type_id={id} type="place" />}
    </>
  );
};

export default PlaceModal;
