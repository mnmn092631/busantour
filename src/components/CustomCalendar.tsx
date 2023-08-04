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
    color:
      festival.category === "전통역사"
        ? "rgba(88, 88, 89, 0.8)"
        : festival.category === "문화예술"
        ? "rgba(217, 139, 43, 0.8)"
        : festival.category === "생태자연"
        ? "rgba(110, 140, 3, 0.8)"
        : festival.category === "지역특산물"
        ? "rgba(4, 157, 217, 0.8)"
        : festival.category === "주민화합"
        ? "rgba(140, 3, 3, 0.8)"
        : "rgba(0, 0, 85, 0.8)",
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
