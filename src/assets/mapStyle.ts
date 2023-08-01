import { theme } from "src/styles/theme";
import styled, { css } from "styled-components";

export const MapGroup = styled.g<{ $active?: boolean }>`
  cursor: pointer;
  stroke: ${theme.color.black};
  stroke-width: 3px;
  position: relative;
`;

export const Marker = styled.g<{ $active: boolean }>`
  ${({ $active }) =>
    $active
      ? css`
          display: inline;
        `
      : css`
          display: none;
        `}
`;

export const GugunName = styled.text`
  cursor: pointer;
  fill: ${theme.color.black};
  stroke: ${theme.color.white};
  stroke-width: 2px;
  font-weight: 600;
  font-size: 50px;
`;
