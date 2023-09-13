import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewComment } from "../../utils/api";
import { Link } from "react-router-dom";
import ErrorPage from "../modules/ErrorPage";

export default function CommentAdder({ article_id, setArticleCommentList }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(false);

  const newComment = { username: user.username, body: comment };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisable(true);
    try {
      const res = await addNewComment(newComment, article_id);
      console.log(res);
      if (res.comment) {
        setArticleCommentList((currComments) => {
          return [res.comment, ...currComments];
        });
        setDisable(false);
        setComment("");
      }
    } catch (err) {
      setError(true);
    }
  };

  const changeHandler = (e) => {
    setComment(e.target.value);
  };

  if (error) return <ErrorPage error={error} />;

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
          maxLength={50}
        />
        <button
          className={`justify-self-center mt-4 ${
            disable === false ? "button" : "button--disable"
          }`}
          disabled={disable}
        >
          Comment
        </button>
      </form>
    </div>
  );
}
