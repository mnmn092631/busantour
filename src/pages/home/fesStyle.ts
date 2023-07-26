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
  top: 50%;
  left: 50%;
  padding: 20px 30px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FesTitle = styled.h2`
  font-size: ${theme.fontSize.xxl};
  color: ${theme.color.white};
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`;

export const FesDate = styled.p`
  font-size: ${theme.fontSize.xl};
  color: ${theme.color.white};
  text-align: center;
  margin-bottom: 10px;
`;

export const FesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FesTag = styled.span`
  display: inline-block;
  font-size: ${theme.fontSize.md};
  color: ${theme.color.white};
  text-align: center;
  border: 1.5px solid #fff;
  border-radius: 10px;
  padding: 2px 6px;
  margin: 5px 3px;
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
