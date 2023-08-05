import { Action } from "redux";
import { TourData } from "types/api";

export type State = TourData[];

export type SetTourAction = Action<"@tour/setTour"> & {
  payload: State;
};

export type Actions = SetTourAction;
