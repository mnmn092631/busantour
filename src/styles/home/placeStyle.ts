import styled from "styled-components";
import { CardContent, CardTitle } from "styles/components/subpage/card";
import { theme } from "styles/theme";

export const PlaceContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  padding: 5%;
  overflow: hidden;
`;

export const PlaceInfo = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 45%;
  padding: 6% 5% 2%;
  border-radius: 0 0 50px 50px;
  box-shadow: 0px 5px 5px ${theme.color.lightGray};
  background-color: ${theme.color.white};
`;

export const GugunName = styled.h2`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
`;

export const PlaceListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 48%;
    margin-bottom: 15px;
  }
`;

export const MapCardTitle = styled(CardTitle)`
  display: block;
  height: auto;
  padding: 3px 0;
  margin-bottom: 10px;
  text-align: left;
`;

export const MapCardContent = styled(CardContent)`
  padding: 0;
  text-align: left;
`;

export const MorePlaceBtn = styled.button`
  margin-top: 10px;
  margin-left: 80%;
  font-weight: 600;
`;
