import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { theme } from "styles/theme";
import { DataCate } from "styles/utils";

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
  width: 60%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const ModalViewImg = styled.img`
  width: 100%;
  height: 45%;
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

export const ModalHompageUrl = styled(Link)`
  padding: 3px 5px;
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${theme.color.blue};
  }
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
  margin-bottom: 20px;
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

export const ModalContent = styled.div`
  width: 85%;
  line-height: 25px;
  font-size: ${theme.fontSize.md};
`;

export const ModalContentTitle = styled.h2`
  font-size: ${theme.fontSize.lg};
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ModalContentDes = styled.p`
  margin-bottom: 10px;
`;

export const ModalTagBtn = styled.button`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  padding: 2px 8px;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
  border-radius: 5px;
`;

export const ModalCommentForm = styled.form`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 10% 2%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${theme.color.white};
`;

export const ModalCommentInput = styled.input`
  flex-grow: 1;
  margin-right: 15px;
  border: 1.5px solid ${theme.color.blue};
  padding: 5px 10px;
`;

export const ModalCommentBtn = styled.button`
  padding: 5px 10px;
  background-color: ${theme.color.blue};
  border-radius: 5px;
  color: ${theme.color.white};
`;

export const ModalListItem = styled.li`
  width: 100%;
  padding: 2%;

  & + & {
    border-top: 2px solid ${theme.color.lightGray};
  }
`;

export const ModalCommentInfo = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  & > strong {
    font-weight: 600;
  }
`;

export const ModalCommentContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalCommentTxt = styled.input`
  margin-right: 20px;
  flex-grow: 1;
  ${({ readOnly }) =>
    !readOnly &&
    css`
      border-bottom: 1.5px solid ${theme.color.lightBlue};
    `}
`;

export const ModalCommentBtns = styled.div`
  & > button {
    font-size: ${theme.fontSize.md};
    padding: 5px;
    transition: all 250ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      color: ${theme.color.blue};
    }
  }
`;
