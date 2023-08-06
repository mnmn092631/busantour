import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { closeModal } from "store/modal";
import { CloseModalBtn, ModalBackdrop, ModalContainer, ModalView } from "styles/components/modal";
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

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.cssText = "overflow-y: hidden;";

      return () => {
        document.body.style.cssText = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderModal = () => {
    const findModal = MODAL_COMPONENT.find(modal => {
      return modal.type === modalType;
    });
    return findModal?.component;
  };

  return (
    <ModalContainer>
      <ModalBackdrop onClick={() => dispatch(closeModal())} />
      <ModalView>
        <CloseModalBtn onClick={() => dispatch(closeModal())} />
        {renderModal()}
      </ModalView>
    </ModalContainer>
  );
};

export default Modal;
