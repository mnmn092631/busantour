import type * as T from "./types";

export const setFood = (payload: T.State): T.SetFoodAction => ({ type: "@food/setFood", payload });
