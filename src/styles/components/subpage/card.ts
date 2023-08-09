import styled from "styled-components";
import { theme } from "styles/theme";
import { GrFormClose } from "react-icons/gr";

export const CardItem = styled.div<{ $active?: number }>`
  position: relative;
  margin-right: calc(8% / 3);
  margin-bottom: calc(70vh * 0.1 / 2);
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(n + 9):nth-child(-n + 12) {
    margin-bottom: 0;
  }
  width: 23%;
  height: 30%;
  border-radius: 10px;
  box-shadow: 10px 10px 15px #bebebe, -10px -10px 15px #ffffff;
  overflow: hidden;
  cursor: pointer;
`;

export const CloseBtn = styled(GrFormClose)`
  display: none;
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: ${theme.fontSize.xl};
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 80%;
`;

export const CardTitle = styled.h2`
  line-height: calc(70vh * 0.3 * 0.2 - 1.25rem);
  padding: 0.625rem 1.25rem;
  width: 100%;
  height: 20%;
  text-align: center;
  font-size: ${theme.fontSize.base};
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardContent = styled.p`
  padding: 0 15px 10px;
  text-align: center;
  font-size: ${theme.fontSize.sm};
`;
