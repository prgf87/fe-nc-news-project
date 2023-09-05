import React from "react";
import { patchArticleVotes } from "../../utils/api";

export default function IncreaseVoteCount({ votes, article_id }) {
  // console.log(votes);
  // console.log(article_id);
  const clickHandler = (e, votes, article_id) => {
    // patchArticleVotes(votes);
    console.log(votes, e, article_id);
  };
  return (
    <button
      className="button--like"
      onClick={(e) => {
        clickHandler(e, votes, article_id);
      }}
    >
      Like
    </button>
  );
}
