import apiService from "api";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ModalCommentInput, ModalCommentBtn } from "styles/components/modal";

interface ModalCommentProps {
  post_id: number;
  type: "place" | "food" | "festival" | "tour";
}

const ModalComment = ({ post_id, type }: ModalCommentProps) => {
  const [comment, setComment] = useState<string>("");
  const user_id = useSelector((state: AppState) => state.auth.user?.id);
  const commentList = useSelector((state: AppState) => state.comment.filter(comment => comment.type === type));

  const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment || !user_id) return;

    apiService.commentService.postComment({ comment, post_id, type, user_id });
    setComment("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <>
      <ul>{commentList && commentList.map(comment => <li key={comment.id}>{comment.comment}</li>)}</ul>
      <form onSubmit={e => addComment(e)}>
        <ModalCommentInput type="text" value={comment} onChange={onChange} />
        <ModalCommentBtn>확인</ModalCommentBtn>
      </form>
    </>
  );
};

export default ModalComment;
