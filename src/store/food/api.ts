import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setFood } from "./actions";
import { RawFoodData } from "types/api";

const color: { [key: string]: string } = {
  한식: "#8C0303",
  중식: "#049dd9",
  일식: "#585859",
  양식: "#d98b2b",
  해산물: "#6e8c03",
  아세안요리: "#CFC817",
  "카페&베이커리": "#9E6821",
  그릴: "#8F5831",
};

export const getFoodAsync =
  (): ThunkAction<void, T.State, unknown, T.SetFoodAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetFoodAction>) => {
    try {
      const { data } = await apiService.foodService.getFood();
      const parsedData: T.State = data.map((item: RawFoodData) => ({
        ...item,
        categoryColor: color[item.category],
        menuArr: item.menu.split(", "),
      }));
      dispatch(setFood(parsedData));
    } catch (error) {
      console.error(error);
    }
  };
