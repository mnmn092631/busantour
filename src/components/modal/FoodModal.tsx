import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalContent, ModalInfo, ModalViewImg } from "styles/components/modal";
import SubpageModalMenu from "./SubpageModalMenu";
import SubpageModalTitle from "./SubpageModalTitle";

const FoodModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.foods.find(food => food.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;

  const {
    name,
    category,
    categoryColor,
    addr,
    usage_open,
    usage_close,
    usage_breaktime,
    menuArr,
    main_img_n,
    itemcntnts,
    likecnt,
  } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <SubpageModalTitle likecnt={likecnt} categoryColor={categoryColor} category={category} name={name} addr={addr} />
      <SubpageModalMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
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
