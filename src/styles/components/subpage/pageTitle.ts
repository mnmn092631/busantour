import styled from "styled-components";
import { theme } from "styles/theme";

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
