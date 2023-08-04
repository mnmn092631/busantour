import React, { useState, useEffect } from "react";
import { CalendarContainer } from "styles/components/customCalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FestivalData } from "types/api";
import apiService from "api";
import koLocale from "@fullcalendar/core/locales/ko";
import { CalendarEvent } from "types/components";

const convertToFestivalEvent = (festival: FestivalData): CalendarEvent => {
  const startDate = new Date(festival.startDate);
  const endDate = new Date(festival.end_date);

  return {
    id: festival.id.toString(),
    title: festival.name,
    start: startDate,
    end: endDate,
  };
};

const CustomCalendar = () => {
  const [festivals, setFestivals] = useState<CalendarEvent[]>();

  useEffect(() => {
    const getFestival = async () => {
      try {
        const response: FestivalData[] = await apiService.festivalService.getFestival();
        const convertedFestivals = response.map(convertToFestivalEvent);
        setFestivals(convertedFestivals);
      } catch (error) {
        console.error(error);
        throw new Error("CustomCalendar");
      }
    };
    getFestival();
  }, []);

  return (
    <CalendarContainer>
      <FullCalendar plugins={[dayGridPlugin]} events={festivals} displayEventTime={false} locale={koLocale} />
    </CalendarContainer>
  );
};

export default CustomCalendar;
