import React, { useState } from "react";
import { CommentData } from "types/api";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";
import apiService from "api";
import localStorageMethod from "common/localStorage";

const ModalCommentItem = ({ comment, fetchCommentList }: { comment: CommentData; fetchCommentList: () => void }) => {
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
    <li>
      <p>
        <strong>{comment.username}</strong>
        <span>{comment.createdAt.toISOString().slice(0, 10)}</span>
      </p>
      <input value={commentTxt} onChange={e => setCommentTxt(e.target.value)} readOnly={isRead} />
      {username?.replaceAll('"', "") === comment.username && (
        <>
          <button onClick={() => setIsRead(!isRead)}>
            {isRead ? <MdEdit /> : <MdDone onClick={() => editComment()} />}
          </button>
          <button onClick={() => deleteComment()}>
            <MdDelete />
          </button>
        </>
      )}
    </li>
  );
};

export default ModalCommentItem;
