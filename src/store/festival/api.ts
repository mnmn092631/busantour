import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setFestival } from "./actions";
import { RawFestivalData } from "types/api";

const color: { [key: string]: string } = {
  전통역사: "rgba(88, 88, 89, 0.8)",
  문화예술: "rgba(217, 139, 43, 0.8)",
  생태자연: "rgba(110, 140, 3, 0.8)",
  지역특산물: "rgba(4, 157, 217, 0.8)",
  주민화합: "rgba(140, 3, 3, 0.8)",
};

export const getFestivalAsync =
  (): ThunkAction<void, T.State, unknown, T.SetFestivalAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetFestivalAction>) => {
    try {
      const { data } = await apiService.festivalService.getFestival();
      const parsedData: T.State = data.map((item: RawFestivalData) => ({
        ...item,
        categoryColor: color[item.category],
        tagsArr: item.tags.split(", "),
        startDate: new Date(item.startDate),
        endDate: new Date(item.endDate),
      }));
      dispatch(setFestival(parsedData));
    } catch (error) {
      console.error(error);
    }
  };
