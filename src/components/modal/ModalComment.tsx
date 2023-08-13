import apiService from "api";
import localStorageMethod from "common/localStorage";
import React, { useEffect, useState } from "react";
import { ModalCommentInput, ModalCommentBtn } from "styles/components/modal";
import { CommentData } from "types/api";
import ModalCommentItem from "./ModalCommentItem";

interface ModalCommentProps {
  type_id: number;
  type: "place" | "food" | "festival" | "tour";
}

const ModalComment = ({ type_id, type }: ModalCommentProps) => {
  const [commentList, setCommentList] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const username = localStorageMethod.getUser();

  useEffect(() => {
    const fetchCommentList = async () => {
      try {
        const { data } = await apiService.commentService.getComment(type, type_id);
        setCommentList(data);
      } catch (error) {
        console.error("Error fetching comment list:", error);
      }
    };
    fetchCommentList();
  }, [type, type_id]);

  const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newComment || !username) return;

    apiService.commentService.postComment({ comment: newComment, type, type_id });
    setNewComment("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <>
      <ul>
        {commentList.length !== 0 &&
          commentList.map(comment => <ModalCommentItem key={comment.id} comment={comment}></ModalCommentItem>)}
      </ul>
      <form onSubmit={e => addComment(e)}>
        <ModalCommentInput type="text" value={newComment} onChange={onChange} />
        <ModalCommentBtn type="submit">확인</ModalCommentBtn>
      </form>
    </>
  );
};

export default ModalComment;
