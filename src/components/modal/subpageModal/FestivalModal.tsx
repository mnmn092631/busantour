import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalContent, ModalInfo, ModalViewImg } from "styles/components/modal";
import SubpageModalMenu from "./utils/SubpageModalMenu";
import SubpageModalTitle from "./utils/SubpageModalTitle";
import ModalComment from "./utils/ModalComment";

const FestivalModal = () => {
  const { dataId } = useSelector((state: AppState) => state.modal);
  const data = useSelector((state: AppState) => state.festivals.find(festival => festival.id === dataId));
  const [selectMenu, setSelectMenu] = useState<string>("상세정보");

  if (!data) return null;

  const { id, name, subname, category, categoryColor, startDate, endDate, place, tagsArr, main_img_n } = data;

  return (
    <>
      <ModalViewImg src={main_img_n} alt={name} />
      <SubpageModalTitle categoryColor={categoryColor} category={category} name={name} />
      <SubpageModalMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
      {selectMenu === "상세정보" && (
        <ModalContent>
          <p>{subname}</p>
          <p>
            {startDate.toISOString().slice(0, 10)} ~ {endDate.toISOString().slice(0, 10)}
          </p>
          <p>
            {tagsArr.map((item, idx) => (
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
      {selectMenu === "댓글" && <ModalComment type_id={id} type="festival" />}
    </>
  );
};

export default FestivalModal;
