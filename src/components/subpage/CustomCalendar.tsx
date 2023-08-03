import React, { useState, useEffect } from "react";
import { CalendarContainer } from "src/styles/components/customCalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FestivalData } from "./../../types/api";
import apiService from "src/api";
import koLocale from "@fullcalendar/core/locales/ko";

interface EventInput {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

const convertToFestivalEvent = (festival: FestivalData): EventInput => {
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
  const [festivals, setFestivals] = useState<EventInput[]>();

  useEffect(() => {
    const getFestival = async () => {
      try {
        const response: FestivalData[] = await apiService.festivalService.getFestival();
        const convertedFestivals = response.map(convertToFestivalEvent);
        console.log(convertedFestivals);
        setFestivals(convertedFestivals);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get festival");
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
