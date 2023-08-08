import { media, theme } from "styles/theme";
import { css, styled } from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderContainer = styled.header<{ $bgWhite: boolean; $isLoginPage: boolean; $isOpen: boolean }>`
  position: fixed;
  height: 70px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  max-width: 1920px;
  width: 100%;

  ${({ $bgWhite, $isLoginPage, $isOpen }) =>
    $bgWhite || $isLoginPage || $isOpen
      ? css`
          color: ${theme.color.black};
          background-color: ${theme.color.white};
          border-bottom: 4px solid ${theme.color.deepBlue};
        `
      : css`
          & button {
            color: ${theme.color.white};
          }
          color: ${theme.color.white};
        `}
`;

export const Logo = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  z-index: 1;
  flex-grow: 1;
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${theme.color.blue};
  }
  ${media.tabletMin} {
    flex-grow: 0;
  }
`;

export const Navbar = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  ${media.tabletMin} {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${theme.color.white};
    ${({ $isOpen }) =>
      $isOpen
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`;

export const NavUl = styled.ul<{ $bgWhite: boolean; $isLoginPage: boolean; $isOpen: boolean }>`
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
    ${media.tabletMin} {
      text-align: center;
      width: 100%;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 30%;
      content: "";
      transition: all 350ms cubic-bezier(0.54, 0, 0.53, 1);
      z-index: -1;
      ${media.tabletMin} {
        top: 0;
        height: 100%;
      }
    }

    &:hover::after {
      background-color: ${theme.color.blue};

      ${({ $bgWhite, $isLoginPage, $isOpen }) =>
        ($bgWhite || $isLoginPage || $isOpen) &&
        css`
          opacity: 0.7;
        `}

      transition: background-color 350ms cubic-bezier(0.54, 0, 0.53, 1);
    }
  }

  ${media.tabletMin} {
    flex-direction: column;
  }
`;

export const LoginBtn = styled(Link)`
  display: block;
  text-align: center;
  font-size: ${theme.fontSize.md};
  font-weight: 600;
  transition: all 350ms ease-in-out;

  &:hover {
    color: ${theme.color.lightBlue};
    transform: scale(1.05);
  }

  ${media.tabletMin} {
    margin: 15px 0;
  }
`;

export const LogoutBtn = styled.button`
  font-size: ${theme.fontSize.md};
  font-weight: 600;
  transition: all 350ms ease-in-out;

  &:hover {
    color: ${theme.color.lightBlue};
    transform: scale(1.05);
  }

  ${media.tabletMin} {
    width: 100%;
    text-align: center;
    margin: 15px 0;
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  font-size: ${theme.fontSize.xxl};
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${theme.color.lightBlue};
    transform: scale(1.1);
  }
`;
