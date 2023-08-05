import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setFestival } from "./actions";

export const getFestivalAsync =
  (): ThunkAction<void, T.State, unknown, T.SetFestivalAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetFestivalAction>) => {
    try {
      const festivals: T.State = await apiService.festivalService.getFestival();
      dispatch(setFestival(festivals));
    } catch (error) {
      console.error(error);
    }
  };
