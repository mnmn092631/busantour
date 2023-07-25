import { theme } from "src/styles/theme";
import { styled } from "styled-components";

export const LayoutContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  z-index: 1;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.xl};
  font-weight: 600;

  & > li {
    position: relative;
    display: block;
    height: 100%;
    flex-shrink: 0;
    margin: 0 15px;
    padding: 20px 10px;
    cursor: pointer;
    z-index: 1;

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 30%;
      content: "";
      background-color: transparent;
      z-index: -1;
      transition: background-color 350ms cubic-bezier(0.54, 0, 0.53, 1);
    }

    &:hover::after {
      background-color: ${theme.color.blue};
      transition: background-color 350ms cubic-bezier(0.54, 0, 0.53, 1);
    }
  }
`;
