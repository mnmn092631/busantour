import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setPlace } from "./actions";

export const getPlaceAsync =
  (): ThunkAction<void, T.State, unknown, T.SetPlaceAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetPlaceAction>) => {
    try {
      const places: T.State = await apiService.placeService.getPlace();
      dispatch(setPlace(places));
    } catch (error) {
      console.error(error);
    }
  };
