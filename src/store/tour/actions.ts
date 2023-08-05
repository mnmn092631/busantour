import type * as T from "./types";

export const setTour = (payload: T.State): T.SetTourAction => ({ type: "@tour/setTour", payload });
