import React from "react";
import { removeArticleVotes } from "../../utils/api";

export default function DecreaseVoteCount({
  currVotes,
  article_id,
  setCurrVotes,
}) {
  const clickAddHandler = (e, votes, id) => {
    e.preventDefault();
    if (votes !== 0) {
      setCurrVotes(votes - 1);
      removeArticleVotes(votes, id);
    } else {
      setCurrVotes(0);
    }
  };
  return (
    <button
      className="button--dislike"
      onClick={(e) => {
        clickAddHandler(e, currVotes, article_id);
      }}
    >
      Dislike
    </button>
  );
}
