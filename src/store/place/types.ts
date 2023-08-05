import { Action } from "redux";
import { PlaceData } from "types/api";

export type State = PlaceData[];

export type SetPlaceAction = Action<"@place/setPlace"> & {
  payload: State;
};

export type Actions = SetPlaceAction;
