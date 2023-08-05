import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { closeModal } from "store/modal";
import { ModalBackdrop, ModalContainer, ModalView } from "styles/components/modal";
import PlaceModal from "./PlaceModal";
import FoodModal from "./FoodModal";
import FestivalModal from "./FestivalModal";

const MODAL_COMPONENT = [
  { type: "places", component: <PlaceModal /> },
  { type: "foods", component: <FoodModal /> },
  { type: "festivals", component: <FestivalModal /> },
];

const Modal = () => {
  const { isOpen, modalType } = useSelector((state: AppState) => state.modal);
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const renderModal = () => {
    const findModal = MODAL_COMPONENT.find(modal => {
      return modal.type === modalType;
    });
    return findModal?.component;
  };

  return (
    <ModalContainer>
      <ModalBackdrop onClick={() => dispatch(closeModal())}>
        <ModalView>
          <GrClose onClick={() => dispatch(closeModal())} />
          {renderModal()}
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default Modal;
