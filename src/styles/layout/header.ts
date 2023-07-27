import { theme } from "src/styles/theme";
import { css, styled } from "styled-components";

export const HeaderContainer = styled.header<{ $bgWhite: boolean; $isIndex: boolean }>`
  ${({ $isIndex }) =>
    $isIndex &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    `}
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ $bgWhite, $isIndex }) =>
    $bgWhite || !$isIndex
      ? css`
          color: ${theme.color.black};
          background-color: ${theme.color.white};
          border-bottom: 4px solid ${theme.color.deepBlue};
        `
      : css`
          color: ${theme.color.white};
        `}
  z-index: 1;
`;

export const Logo = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  z-index: 1;
`;

export const NavUl = styled.ul<{ $bgWhite: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
      transition: all 350ms cubic-bezier(0.54, 0, 0.53, 1);
      z-index: -1;
    }

    &:hover::after {
      background-color: ${theme.color.blue};
      ${({ $bgWhite }) =>
        $bgWhite &&
        css`
          opacity: 0.7;
        `}
      transition: background-color 350ms cubic-bezier(0.54, 0, 0.53, 1);
    }
  }
`;
