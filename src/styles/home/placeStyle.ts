import styled from "styled-components";
import { media, theme } from "styles/theme";
import { DataAddr, DataCate, DataTitle } from "styles/utils";

export const PlaceContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  padding: 5%;
  overflow: hidden;

  & > svg {
    width: 80vmin;
    height: 100vmin;
    max-width: 1344px;
    max-height: 972px;
    position: absolute;
    top: 55%;
    right: 10%;
    transform: translateY(-50%);
    ${media.tabletMax} {
      right: 5%;
      top: 60%;
    }
    ${media.tabletMin} {
      width: 100vmin;
    }
  }
`;

export const PlaceInfo = styled.div`
  width: 45vw;
  max-width: 800px;
  max-height: 35vmin;
  padding: 2% 3%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 15%;
  left: 10%;

  ${media.tabletMin} {
    top: 10%;
    width: 50vw;
    max-height: 40vmin;
  }

  ${media.mobile} {
    flex-direction: row;
    align-items: flex-end;
    width: 85%;
    border: none;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
  }

  border: 2px solid ${theme.color.lightGray};
  background-color: ${theme.color.white};
`;

export const GugunName = styled.h1`
  margin-bottom: 1.875rem;
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  ${media.mobile} {
    margin-bottom: 0;
  }
`;

export const PlaceListContainer = styled.div`
  width: 100%;
  padding: 0.313rem 0.125rem;
  margin-bottom: 1.563rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  overflow-y: scroll;
  ${media.mobile} {
    display: none;
  }
  & > div {
    width: 48%;
    margin-bottom: 0.938rem;
    ${media.tabletMax} {
      width: 100%;
    }

    &:nth-last-child(2),
    &:last-child {
      margin-bottom: 0;
    }
    ${media.tabletMax} {
      &:nth-last-child(2) {
        margin-bottom: 0.938rem;
      }
    }
  }

  &::-webkit-scrollbar {
    display: block;
    width: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.blue};
    border-radius: 50px;
  }
`;

export const MapDataTitle = styled(DataTitle)`
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MapDataCate = styled(DataCate)`
  display: inline-block;
`;

export const MapDataAddr = styled(DataAddr)`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MorePlaceBtn = styled.button`
  height: 20%;
  font-weight: 600;
  transition: all 250ms ease-in-out;
  font-size: ${theme.fontSize.md};

  &:hover {
    color: ${theme.color.blue};
  }
`;
