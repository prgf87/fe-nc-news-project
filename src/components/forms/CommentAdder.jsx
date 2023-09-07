import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewComment } from "../../utils/api";
import { Link } from "react-router-dom";

export default function CommentAdder({
  article_id,
  articleCommentList,
  setArticleCommentList,
}) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const newComment = { username: user.username, body: comment };

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
    <div className="w-full grid mx-auto text-center">
      <p>
        Add a comment as{" "}
        <span className="font-bold">
          <Link to={`/users/${user.username}`}>{user.username}</Link>
        </span>
      </p>
      <form className="grid items-center" onSubmit={submitHandler}>
        <textarea
          className="w-full px-2 py-2 border-2 border-blue-200"
          onChange={changeHandler}
          value={comment}
          required
        />
        <button className="btn h-14 w-40 justify-self-center mt-2">
          Comment
        </button>
      </form>
    </div>
  );
}
