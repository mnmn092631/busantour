import { media, theme } from "styles/theme";
import { css, styled } from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "styles/utils";

export const HeaderContainer = styled.header<{ $bgWhite: boolean; $isAuthPage: boolean; $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  max-width: 1920px;
  width: 100%;
  height: 70px;
  transform: translateX(-50%);
  z-index: 2;

  ${({ $bgWhite, $isAuthPage, $isOpen }) =>
    $bgWhite || $isAuthPage || $isOpen
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

export const HLogo = styled(Logo)`
  flex-grow: 1;
  z-index: 1;
  transition: all 350ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${theme.color.blue};
  }
  ${media.tabletMax} {
    flex-grow: 0;
  }
`;

export const Navbar = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  ${media.tabletMax} {
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

export const NavUl = styled.ul<{ $bgWhite: boolean; $isAuthPage: boolean; $isOpen: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${theme.fontSize.xl};
  font-weight: 600;

  & > li {
    position: relative;
    display: block;
    margin: 0 15px;
    padding: 20px 10px;
    height: 100%;
    flex-shrink: 0;
    z-index: 1;
    cursor: pointer;
    ${media.tabletMin} {
      text-align: center;
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 30%;
      transition: all 350ms cubic-bezier(0.54, 0, 0.53, 1);
      z-index: -1;
      ${media.tabletMax} {
        top: 0;
        height: 100%;
      }
    }

    &:hover::after {
      background-color: ${theme.color.blue};

      ${({ $bgWhite, $isAuthPage, $isOpen }) =>
        ($bgWhite || $isAuthPage || $isOpen) &&
        css`
          opacity: 0.7;
        `}

      transition: background-color 350ms cubic-bezier(0.54, 0, 0.53, 1);
    }
  }

  ${media.tabletMax} {
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

  ${media.tabletMax} {
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

  ${media.tabletMax} {
    margin: 15px 0;
    width: 100%;
    text-align: center;
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
