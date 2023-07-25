import { theme } from "src/styles/theme";
import { styled } from "styled-components";

export const LayoutContainer = styled.header`
  padding: 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.black};
`;

export const Logo = styled.h1`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.xl};
  font-weight: 600;

  & > li {
    display: block;
    height: 100%;
    flex-shrink: 0;
    margin: 0 10px;
    padding: 20px 10px;
    cursor: pointer;
  }
`;
