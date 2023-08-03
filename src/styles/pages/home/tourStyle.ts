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
  cursor: ew-resize;

  &::-webkit-scrollbar {
    display: block;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.white};
    border-radius: 50px;
  }
`;

export const Tag = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 8px;
  flex-shrink: 0;
  border: 2px solid ${theme.color.white};
  color: ${theme.color.white};
  font-size: ${theme.fontSize.md};
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: ${theme.color.blue};
    transition: all 350ms ease-in-out;
  }
`;
