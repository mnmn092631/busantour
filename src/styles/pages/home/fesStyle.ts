import { theme } from "src/styles/theme";
import styled, { css } from "styled-components";

export const FesContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Carousel = styled.div<{ $count: number }>`
  display: flex;
  transition: ${({ $count }) => ($count === 0 ? "" : "all 750ms ease-in-out")};
  transform: ${({ $count }) => `translateX(-${$count * 100}vw)`};
`;

export const FesCard = styled.div`
  position: relative;
`;

export const FesImg = styled.img`
  width: 100vw;
  height: 100vh;
`;

export const FesContent = styled.div`
  position: absolute;
  width: 40vw;
  min-width: 500px;
  top: 50%;
  left: 50%;
  padding: 35px 30px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: ${theme.color.white};
`;

export const FesTitle = styled.h2`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const FesDate = styled.p`
  font-size: ${theme.fontSize.lg};
  text-align: center;
  margin-bottom: 10px;
`;

export const FesSubTitle = styled.h4`
  text-align: center;
  font-size: ${theme.fontSize.lg};
  line-height: 26px;
  margin-bottom: 10px;
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const PageBtn = styled.div<{ $active: boolean }>`
  width: 15px;
  height: 15px;
  border: 2px solid ${theme.color.white};
  border-radius: 50%;
  background-color: ${theme.color.white};
  margin: 0 5px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      border-color: ${theme.color.blue};
      background-color: ${theme.color.blue};
      transform: scale(1.3);
    `}

  &:hover {
    border-color: ${theme.color.lightGray};
    background-color: ${theme.color.lightGray};
    transform: scale(1.3);
  }
`;
