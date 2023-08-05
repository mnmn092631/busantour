import type * as T from "./types";

export const setPlace = (payload: T.State): T.SetPlaceAction => ({ type: "@place/setPlace", payload });
