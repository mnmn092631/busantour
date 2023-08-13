import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalAddr, ModalContent, ModalInfo, ModalViewImg } from "styles/components/modal";
import SubpageModalMenu from "./utils/SubpageModalMenu";
import SubpageModalTitle from "./utils/SubpageModalTitle";
import ModalComment from "./utils/ModalComment";

const TourModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.tours.find(tour => tour.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;

  const {
    id,
    name,
    cate_with,
    cate_season,
    cate_nature,
    cate_plan,
    tagsArr,
    addr,
    trfc_info,
    usage_day,
    hldy_info,
    usage_time,
    usage_amou,
    middle_siz,
    main_img_n,
  } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <SubpageModalTitle name={name} />
      <SubpageModalMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
      {selectMenu === "상세정보" && (
        <ModalContent>
          <ModalAddr>{addr}</ModalAddr>
          <p>{tagsArr && tagsArr.map((item: string, idx: number) => <button key={idx}>#{item}</button>)}</p>
        </ModalContent>
      )}
      {selectMenu === "이용안내" && (
        <ModalInfo>
          <p>
            운영요일 및 시간 : {usage_day}
            <br />
            {usage_time}
          </p>
          {usage_amou && <p>이용요금 : {usage_amou}</p>}
          {hldy_info && <p>휴무일 : {hldy_info}</p>}
          {middle_siz && <p>편의시설 : {middle_siz}</p>}
          <p>교통정보 : {trfc_info}</p>
        </ModalInfo>
      )}
      {selectMenu === "댓글" && <ModalComment type_id={id} type="tour" />}
    </>
  );
};

export default TourModal;
