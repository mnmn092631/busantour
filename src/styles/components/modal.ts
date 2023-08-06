import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { theme } from "styles/theme";
import { CardCategory } from "./subpage/card";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalView = styled.div`
  width: 50%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalViewImg = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 10px;
`;

export const CloseModalBtn = styled(GrClose)`
  position: absolute;
  top: 1%;
  right: 1%;
  font-size: ${theme.fontSize.xl};

  & > path {
    stroke: ${theme.color.white};
  }
`;

export const ModalViewTitle = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
`;

export const ModalCategory = styled(CardCategory)`
  line-height: 24px;
`;

export const ModalAddr = styled.span`
  display: block;
  text-align: center;
`;
