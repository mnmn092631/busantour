import { theme } from "styles/theme";
import styled from "styled-components";
import { Logo } from "./header";

export const FooterContainer = styled.footer`
  position: relative;
  padding: 5%;
  width: 100vw;
  height: 40vh;
  background-color: ${theme.color.deepBlue};
  color: ${theme.color.white};
`;

export const FooterHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 5%;
`;

export const FLogo = styled(Logo)`
  margin-right: 5%;
`;

export const SocialIcons = styled.div`
  max-width: 150px;
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -2px;

  & > * {
    font-size: ${theme.fontSize.xl};
  }
`;

export const FNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;

  & > li {
    width: 25%;
    height: 25px;
    line-height: 25px;
    position: relative;
    display: block;
    text-align: center;
    cursor: pointer;
  }

  & > li::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 25px;
    background-color: ${theme.color.white};
    transform: translate(-50%, -50%);
  }

  & > li:first-child::after {
    display: none;
  }
`;

export const Copyright = styled.span`
  display: block;
  margin: 0 auto;
  text-align: center;
`;
