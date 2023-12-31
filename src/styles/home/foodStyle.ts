import { media, theme } from "styles/theme";
import styled from "styled-components";

export const FoodContainer = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FoodTitle = styled.h2`
  position: relative;
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  text-align: center;
  padding: 20px 10px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 25%;
    background-color: ${theme.color.blue};
    transform: translateX(-50%);
    z-index: -1;
    opacity: 0.7;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
`;

export const FoodCard = styled.div`
  position: relative;
  width: 24%;
  height: 49%;
  cursor: pointer;

  ${media.tabletMax} {
    width: 48%;
    height: 23%;
  }
`;

export const FoodImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const FoodContent = styled.h2`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.xl};
  transition: all 350ms ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 30%;
    bottom: 30%;
    left: 0;
    right: 0;
    background-color: ${theme.color.black};
    opacity: 0.3;
    z-index: -1;
    transition: all 350ms ease-in-out;
  }

  &:hover {
    font-size: ${theme.fontSize.xxl};
    transition: all 350ms ease-in-out;
  }
`;
