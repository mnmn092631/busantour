import { Action } from "redux";
import { FoodData } from "types/api";

export type State = FoodData[];

export type SetFoodAction = Action<"@food/setFood"> & {
  payload: State;
};

export type Actions = SetFoodAction;
