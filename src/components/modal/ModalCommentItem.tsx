import React, { useState } from "react";
import { CommentData } from "types/api";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";
import apiService from "api";

const ModalCommentItem = ({ comment }: { comment: CommentData }) => {
  const [commentTxt, setCommentTxt] = useState<string>(comment.comment);
  const [isRead, setIsRead] = useState(true);

  return (
    <li>
      <input value={commentTxt} readOnly={isRead} onChange={e => setCommentTxt(e.target.value)} />
      <button onClick={() => setIsRead(!isRead)}>
        {isRead ? (
          <MdEdit />
        ) : (
          <MdDone onClick={() => apiService.commentService.putComment({ id: comment.id, comment: commentTxt })} />
        )}
      </button>
      <button onClick={() => apiService.commentService.deleteComment(comment.id)}>
        <MdDelete />
      </button>
    </li>
  );
};

export default ModalCommentItem;
