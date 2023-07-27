import { theme } from "src/styles/theme";
import styled from "styled-components";

export const TourContainer = styled.section`
  width: 100vw;
  background-color: ${theme.color.deepBlue};
  padding: 5%;
`;

export const SectionTitle = styled.h2`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  text-align: center;
  margin-bottom: 3%;
`;

export const TagContainer = styled.div`
  width: 100%;
  height: 125px;
  padding: 0 300px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

export const Tag = styled.button`
  width: 150px;
  height: 40px;
  margin: 0 8px;
  flex-shrink: 0;
  border: 2px solid ${theme.color.white};
  color: ${theme.color.white};
  font-size: ${theme.fontSize.md};
  cursor: pointer;
`;
