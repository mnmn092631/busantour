import React, { useState } from "react";
import { PiHeartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
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

const FoodModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.foods.find(food => food.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;
  const {
    main_img_n,
    name,
    category,
    addr,
    itemcntnts,
    likecnt,
    categoryColor,
    usage_open,
    usage_close,
    usage_breaktime,
    menuArr,
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
          <p>
            영업시간 : {usage_open}~{usage_close}
          </p>
          <p>브레이크타임 : {usage_breaktime}</p>
          <p>메뉴 : {menuArr.join(", ")}</p>
        </ModalInfo>
      )}
    </>
  );
};

export default FoodModal;
