import { GrClose } from "react-icons/gr";
import styled from "styled-components";
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
  padding: 3% 4%;
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
  overflow: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray};
    border-radius: 50px;
  }
`;

export const ModalViewImg = styled.img`
  width: 100%;
  height: 60%;
  margin-bottom: 15px;
`;

export const CloseModalBtn = styled(GrClose)`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: ${theme.fontSize.xl};
  cursor: pointer;

  & > path {
    stroke: ${theme.color.black};
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

export const ModalContent = styled.p`
  width: 90%;
  font-size: ${theme.fontSize.md};
  margin-bottom: 15px;
  line-height: 25px;
`;

export const ModalInfo = styled.div`
  width: 90%;
`;
