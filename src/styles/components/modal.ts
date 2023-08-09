import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { css } from "styled-components";
import { theme } from "styles/theme";
import { DataCate, LikeBtn } from "styles/utils";

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
  margin-bottom: 15px;
  border-radius: 10px 10px 0 0;
`;

export const CloseModalBtn = styled(GrClose)`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: ${theme.fontSize.xl};
  cursor: pointer;

  & > path {
    stroke: ${theme.color.white};
    stroke-width: 4;
  }
`;

export const ModalViewTitle = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
`;

export const ModalCategory = styled(DataCate)`
  line-height: 24px;
`;

export const ModalAddr = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
`;

export const ModalMenu = styled.button<{ $active?: boolean }>`
  width: 33%;
  padding: 1% 3%;
  font-weight: 600;
  transition: all 250ms ease-in-out;
  color: ${theme.color.gray};
  border-bottom: 2px solid ${theme.color.gray};

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.color.blue};
      border-bottom: 2px solid ${theme.color.blue};
    `}
`;

export const ModalLikeBtn = styled(LikeBtn)``;

export const ModalContent = styled.p`
  width: 85%;
  font-size: ${theme.fontSize.md};
  margin-bottom: 15px;
  line-height: 25px;
`;

export const ModalInfo = styled.div`
  width: 90%;
`;
