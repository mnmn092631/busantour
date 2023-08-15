import React, { useState } from "react";
import { CommentData } from "types/api";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";
import apiService from "api";
import localStorageMethod from "common/localStorage";
import {
  ModalCommentBtns,
  ModalCommentContent,
  ModalCommentInfo,
  ModalCommentTxt,
  ModalListItem,
} from "styles/components/modal";

interface ModalCommentItemProps {
  comment: CommentData;
  fetchCommentList: () => void;
}

const ModalCommentItem = ({ comment, fetchCommentList }: ModalCommentItemProps) => {
  const [commentTxt, setCommentTxt] = useState<string>(comment.comment);
  const [isRead, setIsRead] = useState(true);
  const username = localStorageMethod.getUser();

  const editComment = async () => {
    await apiService.commentService.putComment({ id: comment.id, comment: commentTxt });
    fetchCommentList();
  };

  const deleteComment = async () => {
    await apiService.commentService.deleteComment(comment.id);
    fetchCommentList();
  };

  return (
    <ModalListItem>
      <ModalCommentInfo>
        <strong>{comment.username}</strong>
        <span>{comment.createdAt.toISOString().slice(0, 10)}</span>
      </ModalCommentInfo>
      <ModalCommentContent>
        <ModalCommentTxt value={commentTxt} onChange={e => setCommentTxt(e.target.value)} readOnly={isRead} />
        {username?.replaceAll('"', "") === comment.username && (
          <ModalCommentBtns>
            <button onClick={() => setIsRead(!isRead)}>
              {isRead ? <MdEdit /> : <MdDone onClick={() => editComment()} />}
            </button>
            <button onClick={() => deleteComment()}>
              <MdDelete />
            </button>
          </ModalCommentBtns>
        )}
      </ModalCommentContent>
    </ModalListItem>
  );
};

export default ModalCommentItem;
