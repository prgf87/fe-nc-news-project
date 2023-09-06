import React from "react";
import { addArticleVotes } from "../../utils/api";

export default function IncreaseVoteCount({
  currVotes,
  article_id,
  setCurrVotes,
}) {
  const clickAddHandler = (e, votes, id) => {
    e.preventDefault();
    setCurrVotes(votes + 1);
    addArticleVotes(votes, id);
  };
  return (
    <button
      className="button--like"
      onClick={(e) => {
        clickAddHandler(e, currVotes, article_id);
      }}
    >
      Like
    </button>
  );
}
