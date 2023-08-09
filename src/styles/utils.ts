import styled, { css } from "styled-components";
import { theme } from "./theme";

export const Logo = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  z-index: 1;
`;

export const DataCate = styled.strong<{ $category?: number }>`
  padding: 0.125rem 0.313rem;
  margin-right: 0.25rem;
  border-radius: 5px;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.sm};
  font-weight: 400;

  ${({ $category }) =>
    $category === 1
      ? css`
          background-color: #6e8c03;
        `
      : $category === 2
      ? css`
          background-color: #d98b2b;
        `
      : $category === 3
      ? css`
          background-color: #585859;
        `
      : $category === 4
      ? css`
          background-color: #049dd9;
        `
      : css`
          background-color: #8c0303;
        `}
`;

export const DataTitle = styled.h2`
  font-size: ${theme.fontSize.md};
  font-weight: 600;
`;

export const DataAddr = styled.p`
  font-size: ${theme.fontSize.base};
`;
