import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setFestival } from "./actions";
import { FestivalData } from "types/api";

export const getFestivalAsync =
  (): ThunkAction<void, T.State, unknown, T.SetFestivalAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetFestivalAction>) => {
    try {
      const { data } = await apiService.festivalService.getFestival();
      const parsedData: T.State = data.map((item: FestivalData) => ({
        ...item,
        startDate: new Date(item.startDate),
        endDate: new Date(item.endDate),
      }));
      dispatch(setFestival(parsedData));
    } catch (error) {
      console.error(error);
    }
  };
