import { SetURLSearchParams } from "react-router-dom";

export interface PaginationProps {
  cate: string;
  page: number;
  setSearchParams: SetURLSearchParams;
  numPage: number | undefined;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color: string;
}
