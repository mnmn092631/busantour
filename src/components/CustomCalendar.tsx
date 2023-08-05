import React from "react";
import { CalendarContainer } from "styles/components/customCalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";
import { CalendarEvent } from "types/components";

const CustomCalendar = ({ events }: { events: CalendarEvent[] }) => {
  return (
    <CalendarContainer>
      <FullCalendar plugins={[dayGridPlugin]} events={events} displayEventTime={false} locale={koLocale} />
    </CalendarContainer>
  );
};

export default CustomCalendar;
