import React, { useState } from "react";
import { removeArticleVotes } from "../../utils/api";

export default function DecreaseVoteCount({
  currVotes,
  article_id,
  setCurrVotes,
}) {
  const [disable, setDisable] = useState(false);

  const clickAddHandler = (e, votes, id) => {
    e.preventDefault();
    if (votes !== 0) {
      removeArticleVotes(votes, id);
    } else {
      setCurrVotes(0);
    }
    setCurrVotes(votes - 1);
  };
  return (
    <button
      className={disable ? "disable--dislike" : "button--dislike"}
      onClick={(e) => {
        clickAddHandler(e, currVotes, article_id);
        setDisable(true);
      }}
      disabled={disable}
    >
      Dislike
    </button>
  );
}
