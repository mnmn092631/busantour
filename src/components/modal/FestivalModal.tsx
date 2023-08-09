import React, { useState } from "react";
import { PiHeartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { AppState } from "store";
import {
  ModalCategory,
  ModalContent,
  ModalInfo,
  ModalLikeBtn,
  ModalMenu,
  ModalMenuContainer,
  ModalViewImg,
  ModalViewTitle,
} from "styles/components/modal";

const FestivalModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.festivals.find(festival => festival.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;
  const { main_img_n, name, category, tags, startDate, endDate, subname, place, categoryColor, likecnt } = data;

  const tagList = tags.split(", ");

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
      <ModalViewTitle>
        <ModalCategory $category={categoryColor}>{category}</ModalCategory>
        {name}
      </ModalViewTitle>
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
          <p>{subname}</p>
          <p>
            {startDate.toISOString().slice(0, 10)} ~ {endDate.toISOString().slice(0, 10)}
          </p>
          <p>
            {tagList.map((item, idx) => (
              <button key={idx}>#{item}</button>
            ))}
          </p>
        </ModalContent>
      )}
      {selectMenu === "이용안내" && (
        <ModalInfo>
          <p>{place}</p>
        </ModalInfo>
      )}
    </>
  );
};

export default FestivalModal;
