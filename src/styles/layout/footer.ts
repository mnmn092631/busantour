import { media, theme } from "styles/theme";
import styled from "styled-components";
import { Logo } from "styles/utils";

export const FooterContainer = styled.footer`
  position: relative;
  padding: 5%;
  width: 100%;
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
    cursor: pointer;
    transition: all 250ms ease-in-out;
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
    width: 25%;
    height: 25px;
    line-height: 25px;
    position: relative;
    display: block;
    text-align: center;
    cursor: pointer;

    ${media.mobile} {
      width: 100%;
      height: 30px;
      line-height: 30px;
      margin: 5px 0;
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
      width: 25px;
      height: 1px;
      top: -5px;
      left: 50%;
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
