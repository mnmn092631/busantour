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

  return (
    <>
      {festivals.length !== 0 && (
        <PageTitle pageName="지역축제" imgSrc={festivals[0].main_img_n} imgName={festivals[0].name} />
      )}
      <ContentContainer>{events && <CustomCalendar events={events} />}</ContentContainer>
    </>
  );
};

export default Festival;
