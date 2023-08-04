import styled, { css } from "styled-components";
import { theme } from "styles/theme";

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 75%;
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
