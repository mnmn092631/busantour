import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setPlace } from "./actions";
import { RawPlaceData } from "types/api";

const category: { [key: string]: string } = {
  공원: "#6e8c03",
  문화: "#d98b2b",
  역사: "#585859",
  자연: "#049dd9",
  체험: "#8c0303",
};

export const getPlaceAsync =
  (): ThunkAction<void, T.State, unknown, T.SetPlaceAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetPlaceAction>) => {
    try {
      const { data } = await apiService.placeService.getPlace();
      const parsedData: T.State = data.map((item: RawPlaceData) => ({
        ...item,
        categoryColor: category[item.category],
        tagsArr: item.tags?.split(", "),
      }));
      dispatch(setPlace(parsedData));
    } catch (error) {
      console.error(error);
    }
  };
