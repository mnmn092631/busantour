import styled from "styled-components";
import { media, theme } from "../theme";

export const CalendarContainer = styled.div`
  .fc-day-sun .fc-col-header-cell-cushion,
  .fc-day-sun .fc-daygrid-day-number {
    color: red;
  }

  .fc-day-sat .fc-col-header-cell-cushion,
  .fc-day-sat .fc-daygrid-day-number {
    color: blue;
  }

  .fc-toolbar-chunk > .fc-today-button .fc-button .fc-button-primary {
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

  .fc .fc-popover {
    z-index: 100;
  }

  .fc-event {
    height: 25px;
    line-height: 20px;
    padding-left: 5px;
    cursor: pointer;

    ${media.tabletMin} {
      height: 20px;
      line-height: 15px;
    }
  }
`;
