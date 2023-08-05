import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setFood } from "./actions";

export const getFoodAsync =
  (): ThunkAction<void, T.State, unknown, T.SetFoodAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetFoodAction>) => {
    try {
      const foods: T.State = await apiService.foodService.getFood();
      dispatch(setFood(foods));
    } catch (error) {
      console.error(error);
    }
  };
