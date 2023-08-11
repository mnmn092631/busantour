import React, { useState, useEffect } from "react";
import { ContentContainer } from "styles/subpage/utils";
import CustomCalendar from "components/CustomCalendar";
import PageTitle from "components/subpage/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getFestivalAsync } from "store/festival";
import { FestivalData } from "types/api";
import { CalendarEvent } from "types/components";

const convertToFestivalEvent = (festival: FestivalData): CalendarEvent => {
  const startDate = new Date(festival.startDate);
  let endDate = new Date(festival.endDate);
  endDate.setDate(endDate.getDate() + 1);

  return {
    id: festival.id.toString(),
    title: festival.name,
    start: startDate,
    end: endDate,
    color: festival.categoryColor,
  };
};

const Festival = () => {
  const [events, setEvents] = useState<CalendarEvent[]>();

  const dispatch = useDispatch();
  const festivals: AppState["festivals"] = useSelector((state: AppState) => state.festivals);

  useEffect(() => {
    dispatch<any>(getFestivalAsync());
  }, [dispatch]);

  useEffect(() => {
    setEvents(festivals.map(convertToFestivalEvent));
  }, [festivals]);

  if (festivals.length === 0) return null;

  return (
    <>
      <PageTitle pageName="지역축제" imgSrc={festivals[5].main_img_n} imgName={festivals[5].name} />
      <ContentContainer>{events && <CustomCalendar events={events} />}</ContentContainer>
    </>
  );
};

export default Festival;
