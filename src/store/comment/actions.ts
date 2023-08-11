import type * as T from "./types";

export const setComment = (payload: T.State): T.SetCommentAction => ({ type: "@comment/setComment", payload });
