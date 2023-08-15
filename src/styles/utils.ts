import styled from "styled-components";
import { theme } from "./theme";

export const Logo = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  z-index: 1;
`;

export const DataCate = styled.strong<{ $category?: string }>`
  padding: 0.125rem 0.313rem;
  margin-right: 0.25rem;
  border-radius: 5px;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.sm};
  font-weight: 400;
  background-color: ${({ $category }) => $category};
`;

export const DataTitle = styled.h2`
  font-size: ${theme.fontSize.md};
  font-weight: 600;
`;

export const DataAddr = styled.p`
  font-size: ${theme.fontSize.base};
`;
