import { theme } from "src/styles/theme";
import styled from "styled-components";

export const MapPath = styled.path`
  cursor: pointer;
  stroke: ${theme.color.black};
  stroke-width: 3px;
`;

export const GugunName = styled.text`
  cursor: pointer;
  fill: ${theme.color.black};
  stroke: ${theme.color.white};
  stroke-width: 2px;
  font-weight: 600;
  font-size: 50px;
`;
