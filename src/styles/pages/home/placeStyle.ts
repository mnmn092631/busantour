import styled from "styled-components";
import { CardContent, CardTitle } from "../subpage/utils";
import { theme } from "src/styles/theme";

export const PlaceContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 5%;
`;

export const PlaceInfo = styled.div`
  position: absolute;
  top: 45%;
  left: 10%;
  width: 45%;
  padding: 2% 5%;
  transform: translateY(-50%);
  border-radius: 50px;
  box-shadow: 0px 10px 10px ${theme.color.lightBlue};
  background-color: ${theme.color.white};
`;

export const GugunName = styled.h2`
  font-size: ${theme.fontSize.xxl};
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
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
  text-align: left;
`;

export const MapCardContent = styled(CardContent)`
  padding: 0;
  text-align: left;
`;
