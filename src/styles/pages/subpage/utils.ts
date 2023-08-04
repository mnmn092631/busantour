import { GrFormClose } from "react-icons/gr";
import { theme } from "src/styles/theme";
import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
  position: relative;

  & > img {
    width: 100vw;
    height: 70vh;
  }
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 5%;
  left: 15%;
  text-align: center;
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  color: ${theme.color.white};
`;

export const ContentContainer = styled.div`
  padding: 2% 16%;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 75%;
`;

export const SelectItem = styled.span<{ $active: boolean }>`
  position: relative;
  padding-bottom: 5px;
  margin: 0 15px 5px 0;
  font-weight: 600;
  color: ${theme.color.gray};
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    ${({ $active }) =>
      !$active &&
      css`
        color: ${theme.color.lightBlue};
      `}
    transition: all 250ms ease-in-out;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.color.deepBlue};
      transform: scale(1.1);
    `}
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 65vh;
`;

export const Card = styled.div<{ $active?: number }>`
  position: relative;
  margin-right: 2%;
  margin-bottom: 2%;
  width: 23%;
  border-radius: 20px;
  box-shadow: 10px 10px 15px #bebebe, -10px -10px 15px #ffffff;
  overflow: hidden;

  ${({ $active }) =>
    $active === 2
      ? css`
          display: flex;
          width: 100%;
          height: 100%;

          & > img {
            width: 50%;
            height: 100%;
            margin-bottom: 0;
          }

          & > div {
            padding: 5%;
            flex-grow: 1;
          }

          & > svg {
            display: block;
          }
        `
      : $active === 3 &&
        css`
          display: none;
        `};
`;

export const CloseBtn = styled(GrFormClose)`
  display: none;
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: ${theme.fontSize.xl};
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: ${theme.fontSize.md};
  font-weight: 600;
  margin-bottom: 5px;
`;

export const CardCategory = styled.strong<{ $category?: number }>`
  padding: 0 3px;
  margin-right: 3px;
  border-radius: 5px;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.sm};
  font-weight: 400;

  ${({ $category }) =>
    $category === 1
      ? css`
          background-color: #6e8c03;
        `
      : $category === 2
      ? css`
          background-color: #d98b2b;
        `
      : $category === 3
      ? css`
          background-color: #585859;
        `
      : $category === 4
      ? css`
          background-color: #049dd9;
        `
      : css`
          background-color: #8c0303;
        `}
`;

export const CardContent = styled.p`
  padding: 0 15px 10px;
  text-align: center;
  font-size: ${theme.fontSize.sm};
`;

export const PaginationContainer = styled.div`
  padding: 2% 16%;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const PageBtn = styled.div<{ $active?: boolean }>`
  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.color.deepBlue};
      font-weight: 600;
      transform: scale(1.2);
      transition: all 350ms ease-in-out;
    `}
  transition:all 350ms ease-in-out;
  cursor: pointer;
`;
