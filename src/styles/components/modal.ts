import styled from "styled-components";
import { theme } from "styles/theme";

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
  overflow: hidden;
`;

export const ModalViewImg = styled.img`
  width: 100%;
  height: 50%;
`;
