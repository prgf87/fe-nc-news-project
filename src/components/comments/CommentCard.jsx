import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteComment } from "../../utils/api";

export default function CommentCard({ comment, setArticleCommentList }) {
  const { user } = useContext(UserContext);
  const [commentID, setCommentID] = useState(comment.comment_id);
  const [disable, setDisable] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    setCommentID(e.target.value);
    deleteComment(commentID)
      .then(({ status }) => {
        if (status === 204) {
          setArticleCommentList((currComments) => {
            return currComments.filter(
              (comment) => comment.comment_id !== commentID
            );
          });
          setDisable(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="comment--card">
      <h3>{comment.title}</h3>
      <h4>{comment.author}</h4>
      <h4>{comment.topic}</h4>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <div className="flex justify-center items-center">
        <p className="text-xs border-2 rounded-full px-3 py-2 m-auto bg-green-500/50">
          {comment.votes}
        </p>
      </div>

      <img
        src={comment.article_img_url}
        alt={comment.title}
        className="w-full"
      />
      {user.username === comment.author && (
        <button
          className={disable === false ? "button--delete" : "disable--delete"}
          onClick={clickHandler}
          value={comment.comment_id}
          disabled={disable}
        >
          Delete Comment
        </button>
      )}
    </div>
  );
}
