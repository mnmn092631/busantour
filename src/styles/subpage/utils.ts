import { theme } from "styles/theme";
import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ContentContainer = styled.div`
  padding: 2% 16%;
`;

export const PaginationContainer = styled.div`
  padding: 0 16%;
  width: 70vw;
  margin: 0 auto;
  margin-bottom: 3%;
  display: flex;
  justify-content: space-between;
`;

export const PageBtn = styled.div<{ $active?: boolean }>`
  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.color.deepBlue};
      font-weight: 600;
      transform: scale(1.2);
      transition: all 350ms ease-in-out;
    `}
  transition:all 350ms ease-in-out;
  cursor: pointer;
`;
