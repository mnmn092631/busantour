import apiService from "api";
import type * as T from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setComment } from "./actions";

export const getCommentAsync =
  (type: string, post_id: number): ThunkAction<void, T.State, unknown, T.SetCommentAction> =>
  async (dispatch: ThunkDispatch<T.State, unknown, T.SetCommentAction>) => {
    try {
      const { data } = await apiService.commentService.getComment(type, post_id);
      dispatch(setComment(data));
    } catch (error) {
      console.error(error);
    }
  };
