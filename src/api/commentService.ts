import { axiosInstance } from "api";
import cookieMethod from "common/cookie";
import { CommentData } from "types/api";

/**
 * 댓글 목록 요청
 * @param {string} type
 * @param {number} type_id
 * @return AxiosPromise
 */
const getComment = (type: string, type_id: number) => axiosInstance.get<CommentData[]>(`/comment/${type}/${type_id}`);

/**
 * 댓글 생성 요청
 * @param body 댓글 작성 하는데 필요한 데이터들(comment, type, typeId)
 * @return AxiosPromise
 */
const postComment = (body: Omit<CommentData, "id" | "createdAt" | "username">) =>
  axiosInstance.post("/comment/add", body, {
    headers: { Authorization: `Bearer ${cookieMethod.getCookie("accessToken")}` },
  });

/**
 * 댓글 수정 요청
 * @param body 댓글 수정 하는데 필요한 데이터들(id, comment)
 * @return AxiosPromise
 */
const putComment = (body: Pick<CommentData, "id" | "comment">) =>
  axiosInstance.put(
    `/comment/edit/${body.id}`,
    { comment: body.comment },
    {
      headers: { Authorization: `Bearer ${cookieMethod.getCookie("accessToken")}` },
    },
  );

/**
 * 댓글 삭제 요청
 * @param {number} id 댓글의 id
 * @return AxiosPromise
 */
const deleteComment = (id: number) =>
  axiosInstance.delete(`/comment/delete/${id}`, {
    headers: { Authorization: `Bearer ${cookieMethod.getCookie("accessToken")}` },
  });

const commentService = { getComment, postComment, putComment, deleteComment };

export default commentService;
