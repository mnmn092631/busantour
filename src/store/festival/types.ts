import { Action } from "redux";
import { FestivalData } from "types/api";

export type State = FestivalData[];

export type SetFestivalAction = Action<"@festival/setFestival"> & {
  payload: State;
};

export type Actions = SetFestivalAction;
