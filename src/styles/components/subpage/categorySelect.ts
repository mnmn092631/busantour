import styled, { css } from "styled-components";
import { media, theme } from "styles/theme";

export const SelectContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 80%;

  ${media.tabletMin} {
    max-width: 100%;
  }
`;

export const SelectItem = styled.span<{ $active: boolean }>`
  position: relative;
  padding-bottom: 5px;
  margin: 0 15px 5px 0;
  font-size: ${theme.fontSize.lg};
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
