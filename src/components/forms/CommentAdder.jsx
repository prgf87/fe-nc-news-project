import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewComment } from "../../utils/api";

export default function CommentAdder({
  article_id,
  articleCommentList,
  setArticleCommentList,
}) {
  const { users } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const newComment = { username: users[0].username, body: comment };

  const submitHandler = (e) => {
    e.preventDefault();
    addNewComment(newComment, article_id);
    setArticleCommentList([comment, ...articleCommentList]);
    setComment("");
  };

  const changeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="w-full flex justify-center">
      <form className="flex" onSubmit={submitHandler}>
        <input
          className="w-full px-2 py-2 border-2 border-blue-200"
          onChange={changeHandler}
          value={comment}
          required
        />
        <button className="btn">Comment</button>
      </form>
    </div>
  );
}
