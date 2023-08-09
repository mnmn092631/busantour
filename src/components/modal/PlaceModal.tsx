import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "store";
import {
  ModalAddr,
  ModalCategory,
  ModalContent,
  ModalInfo,
  ModalLikeBtn,
  ModalMenu,
  ModalMenuContainer,
  ModalViewImg,
  ModalViewTitle,
} from "styles/components/modal";
import { IoHomeSharp } from "react-icons/io5";
import { PiHeartLight } from "react-icons/pi";

const PlaceModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.places.find(place => place.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;
  const {
    categoryColor,
    main_img_n,
    name,
    category,
    addr,
    itemcntnts,
    likecnt,
    trfc_info,
    homepage_u,
    hldy_info,
    usage_time,
    usage_amou,
    middle_siz,
  } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <div>
        {homepage_u && (
          <Link to={homepage_u} target="_blank">
            <IoHomeSharp />
            홈페이지
          </Link>
        )}
        <ModalLikeBtn>
          <PiHeartLight />
          {/* <PiHeartFill /> */}
          {likecnt}
        </ModalLikeBtn>
      </div>
      <ModalViewTitle>
        <ModalCategory $category={categoryColor}>{category}</ModalCategory>
        {name}
      </ModalViewTitle>
      <ModalAddr>{addr}</ModalAddr>
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
    </>
  );
};

export default PlaceModal;
