import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setTour } from "./actions";
import { RawTourData } from "types/api";

export const getTourAsync =
  (): ThunkAction<void, T.State, unknown, T.SetTourAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetTourAction>) => {
    try {
      const { data } = await apiService.tourService.getTour();
      const parsedData: T.State = data.map((item: RawTourData) => ({
        ...item,
        cateArr_with: item.cate_with?.split(", "),
        cateArr_season: item.cate_season?.split(", "),
        cateArr_nature: item.cate_nature?.split(", "),
        cateArr_plan: item.cate_plan?.split(", "),
        tagsArr: item.tags?.split(", ") || [],
      }));
      dispatch(setTour(parsedData));
    } catch (error) {
      console.error(error);
    }
  };
