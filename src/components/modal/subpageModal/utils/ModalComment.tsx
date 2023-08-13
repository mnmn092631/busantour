import apiService from "api";
import localStorageMethod from "common/localStorage";
import React, { useEffect, useState, useCallback } from "react";
import {
  ModalCommentInput,
  ModalCommentBtn,
  ModalCommentContainer,
  ModalCommentForm,
  ModalCommentList,
} from "styles/components/modal";
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

  const fetchCommentList = useCallback(async () => {
    try {
      const { data } = await apiService.commentService.getComment(type, type_id);
      const parsedData: CommentData[] = data.map((item: CommentData) => ({
        ...item,
        createdAt: new Date(item.createdAt),
      }));
      setCommentList(parsedData);
    } catch (error) {
      console.error("Error fetching comment list:", error);
    }
  }, [type, type_id]);

  useEffect(() => {
    fetchCommentList();
  }, [fetchCommentList]);

  const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment || !username) return;

    await apiService.commentService.postComment({ comment: newComment, type, typeId: type_id });

    fetchCommentList();
    setNewComment("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <ModalCommentContainer>
      <ModalCommentForm onSubmit={e => addComment(e)}>
        <ModalCommentInput type="text" value={newComment} onChange={onChange} />
        <ModalCommentBtn type="submit">확인</ModalCommentBtn>
      </ModalCommentForm>
      <ModalCommentList>
        {commentList.length !== 0 &&
          commentList.map(comment => (
            <ModalCommentItem key={comment.id} comment={comment} fetchCommentList={fetchCommentList} />
          ))}
      </ModalCommentList>
    </ModalCommentContainer>
  );
};

export default ModalComment;
