import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setTour } from "./actions";

export const getTourAsync =
  (): ThunkAction<void, T.State, unknown, T.SetTourAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetTourAction>) => {
    try {
      const tours: T.State = await apiService.tourService.getTour();
      dispatch(setTour(tours));
    } catch (error) {
      console.error(error);
    }
  };
