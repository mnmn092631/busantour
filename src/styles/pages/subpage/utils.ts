import { theme } from "src/styles/theme";
import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
  position: relative;

  & > img {
    width: 100vw;
    height: 70vh;
  }
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 5%;
  left: 15%;
  text-align: center;
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  color: ${theme.color.white};
`;

export const ContentContainer = styled.div`
  padding: 2% 16%;
  height: 100vh;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SelectItem = styled.span<{ $active: boolean }>`
  position: relative;
  padding-bottom: 5px;
  margin: 0 15px 5px 0;
  font-weight: 600;
  color: ${theme.color.gray};
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    ${({ $active }) =>
      !$active &&
      css`
        color: ${theme.color.lightBlue};
      `}
    transition: all 250ms ease-in-out;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.color.deepBlue};
      transform: scale(1.1);
    `}
`;

export const CardContainer = styled.div``;
