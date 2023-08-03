import styled from "styled-components";
import { theme } from "../theme";

export const CalendarContainer = styled.div`
  .fc-day-sun .fc-col-header-cell-cushion,
  .fc-day-sun .fc-daygrid-day-number {
    color: red;
  }

  .fc-day-sat .fc-col-header-cell-cushion,
  .fc-day-sat .fc-daygrid-day-number {
    color: blue;
  }

  .fc-toolbar-chunk > .fc-today-button.fc-button.fc-button-primary {
    background-color: ${theme.color.lightBlue};
    border: none;
    transition: all 350ms ease-in-out;

    &:hover {
      background-color: ${theme.color.blue};
    }

    &:disabled {
      background-color: ${theme.color.lightGray};

      &:hover {
        background-color: ${theme.color.lightGray};
      }
    }
  }

  .fc-button-group > button {
    background-color: ${theme.color.lightBlue};
    border: none;
    transition: all 350ms ease-in-out;

    &:hover {
      background-color: ${theme.color.blue};
    }

    &:focus {
      box-shadow: none;
    }
  }
`;
