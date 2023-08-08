import { Action } from "redux";
import { ParsedTourData } from "types/api";

export type State = ParsedTourData[];

export type SetTourAction = Action<"@tour/setTour"> & {
  payload: State;
};

export type Actions = SetTourAction;
