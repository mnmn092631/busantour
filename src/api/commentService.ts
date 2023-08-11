import { axiosInstance } from "api";
import { CommentData } from "types/api";

const getComment = (type: string, post_id: number) => axiosInstance.get<CommentData[]>(`/comment/${type}/${post_id}`);

const postComment = ({ comment, post_id, type, user_id }: Omit<CommentData, "id" | "created_at">) =>
  axiosInstance.post("/comment/add", {
    comment,
    post_id,
    type,
    user_id,
  });

const putComment = ({ id, comment, user_id }: Pick<CommentData, "id" | "comment" | "user_id">) =>
  axiosInstance.put(`/comment/edit/${id}`, { comment, user_id });

const deleteComment = (id: number) => axiosInstance.delete(`/comment/delete/${id}`);

const commentService = { getComment, postComment, putComment, deleteComment };

export default commentService;
