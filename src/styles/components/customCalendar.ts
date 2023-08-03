import styled from "styled-components";
import { theme } from "../theme";

export const CalendarConatiner = styled.div`
  font-family: "Noto Sans KR", sans-serif;

  .react-calendar {
    width: 100%;
  }

  .react-calendar__navigation {
    text-align: center;
    display: flex;

    & > button {
      font-size: ${theme.fontSize.lg};
      font-weight: 600;
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
      display: none;
    }
  }
`;
