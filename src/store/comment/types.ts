import { Action } from "redux";
import { CommentData } from "types/api";

export type State = CommentData[];

export type SetCommentAction = Action<"@comment/setComment"> & {
  payload: State;
};

export type Actions = SetCommentAction;
