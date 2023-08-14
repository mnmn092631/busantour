import styled from "styled-components";
import { media, theme } from "styles/theme";
import { GrFormClose } from "react-icons/gr";
import { DataTitle } from "styles/utils";

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

  ${media.tabletMin} {
    width: 30%;
    height: 23%;
    margin-right: calc(8% / 2);
    margin-bottom: calc(70vh * 0.08 / 3);
    &:nth-child(4n) {
      margin-right: calc(8% / 2);
    }
    &:nth-child(n + 9):nth-child(-n + 12) {
      margin-bottom: calc(70vh * 0.08 / 3);
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(n + 10):nth-child(-n + 12) {
      margin-bottom: 0;
    }
  }

  ${media.mobile} {
    width: 90%;
    margin: 0 auto;
    margin-bottom: calc(100vh * 0.08 / 3);
    &:nth-child(4n),
    &:nth-child(3n) {
      margin: 0 auto;
      margin-bottom: calc(100vh * 0.08 / 3);
    }
    &:nth-child(n + 10):nth-child(-n + 12) {
      margin-bottom: calc(100vh * 0.08 / 3);
    }
    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  }
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

export const CardTitle = styled(DataTitle)`
  line-height: calc(70vh * 0.3 * 0.2 - 1.25rem);
  padding: 0.625rem 1.25rem;
  height: 20%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.tabletMin} {
    line-height: calc(70vh * 0.23 * 0.2 - 1.25rem);
  }

  ${media.mobile} {
    line-height: calc(100vh * 0.23 * 0.2 - 1.25rem);
  }
`;
