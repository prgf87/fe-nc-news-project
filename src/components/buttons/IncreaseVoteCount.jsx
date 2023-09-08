import React, { useState } from "react";
import { addArticleVotes } from "../../utils/api";
import ErrorPage from "../modules/ErrorPage";

export default function IncreaseVoteCount({ currVotes, article_id }) {
  const [disable, setDisable] = useState(false);
  const clickAddHandler = (e, votes, id) => {
    e.preventDefault();

    addArticleVotes(votes, id).catch((error) => {
      if (error) {
        return <ErrorPage error={error} />;
      }
    });
  };
  return (
    <button
      className={disable === true ? "disable--like" : "button--like"}
      onClick={(e) => {
        clickAddHandler(e, currVotes, article_id);
        setDisable(true);
      }}
      disabled={disable}
    >
      Like
    </button>
  );
}
