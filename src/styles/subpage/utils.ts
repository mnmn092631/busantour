import { theme } from "styles/theme";
import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  height: 60vh;
  margin-bottom: 40px;
`;

export const ContentContainer = styled.div`
  padding: 2% 16%;
`;

export const PaginationContainer = styled.div`
  width: 70vw;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const PageBtn = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      padding: 0 5px;
      color: ${theme.color.deepBlue};
      font-weight: 600;
      transform: scale(1.3);
    `}

  & > svg {
    margin-top: 3px;
    & > * {
      stroke: ${({ disabled }) => disabled && theme.color.lightGray};
    }
  }
`;
