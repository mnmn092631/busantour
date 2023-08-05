import React from "react";
import { CalendarContainer } from "styles/components/customCalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";
import { CalendarEvent } from "types/components";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch } from "react-redux";
import { openModal } from "store/modal";

const CustomCalendar = ({ events }: { events: CalendarEvent[] }) => {
  const dispatch = useDispatch();

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        displayEventTime={false}
        locale={koLocale}
        eventClick={info => dispatch(openModal("festivals", Number(info.event._def.publicId)))}
        dayMaxEventRows={3}
        eventOverlap={false}
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;
