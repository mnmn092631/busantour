import { media, theme } from "styles/theme";
import styled from "styled-components";
import { Logo } from "styles/utils";

export const FooterContainer = styled.footer`
  position: relative;
  padding: 5%;
  width: 100%;
  color: ${theme.color.white};
  background-color: ${theme.color.deepBlue};
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -2px;
  max-width: 150px;
  width: 35%;

  & > * {
    font-size: ${theme.fontSize.xl};
    transition: all 250ms ease-in-out;
    cursor: pointer;
  }

  & > *:hover {
    transform: scale(1.2);
  }
`;

export const FNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;

  ${media.mobile} {
    flex-direction: column;
  }

  & > li {
    position: relative;
    display: block;
    width: 25%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    cursor: pointer;

    ${media.mobile} {
      margin: 5px 0;
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
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

    ${media.mobile} {
      top: -5px;
      left: 50%;
      width: 25px;
      height: 1px;
    }
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
