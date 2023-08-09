import React, { useState } from "react";
import { PiHeartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { AppState } from "store";
import {
  ModalAddr,
  ModalContent,
  ModalInfo,
  ModalLikeBtn,
  ModalMenu,
  ModalMenuContainer,
  ModalViewImg,
  ModalViewTitle,
} from "styles/components/modal";

const TourModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.tours.find(tour => tour.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;
  const {
    main_img_n,
    name,
    addr,
    tagsArr,
    cate_with,
    cate_season,
    cate_nature,
    cate_plan,
    trfc_info,
    usage_day,
    usage_time,
    usage_amou,
    likecnt,
    hldy_info,
    middle_siz,
  } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <div>
        <ModalLikeBtn>
          <PiHeartLight />
          {/* <PiHeartFill /> */}
          {likecnt}
        </ModalLikeBtn>
      </div>
      <ModalViewTitle>{name}</ModalViewTitle>
      <ModalMenuContainer>
        <ModalMenu $active={selectMenu === "상세정보"} onClick={() => setSelectMenu("상세정보")}>
          상세정보
        </ModalMenu>
        <ModalMenu $active={selectMenu === "이용안내"} onClick={() => setSelectMenu("이용안내")}>
          이용안내
        </ModalMenu>
        <ModalMenu $active={selectMenu === "댓글"} onClick={() => setSelectMenu("댓글")}>
          댓글
        </ModalMenu>
      </ModalMenuContainer>
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
    </>
  );
};

export default TourModal;
