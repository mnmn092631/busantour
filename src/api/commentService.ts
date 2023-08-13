import { axiosInstance } from "api";
import cookieMethod from "common/cookie";
import { CommentData } from "types/api";

const getComment = (type: string, type_id: number) => axiosInstance.get<CommentData[]>(`/comment/${type}/${type_id}`);

const postComment = ({ comment, type_id, type }: Omit<CommentData, "id" | "created_at" | "username">) =>
  axiosInstance.post(
    "/comment/add",
    {
      comment,
      type,
      typeId: type_id,
    },
    {
      headers: { Authorization: `Bearer ${cookieMethod.getCookie("accessToken")}` },
    },
  );

const putComment = ({ id, comment }: Pick<CommentData, "id" | "comment">) =>
  axiosInstance.put(
    `/comment/edit/${id}`,
    { comment },
    {
      headers: { Authorization: `Bearer ${cookieMethod.getCookie("accessToken")}` },
    },
  );

const deleteComment = (id: number) =>
  axiosInstance.delete(`/comment/delete/${id}`, {
    headers: { Authorization: `Bearer ${cookieMethod.getCookie("accessToken")}` },
  });

const commentService = { getComment, postComment, putComment, deleteComment };

export default commentService;
