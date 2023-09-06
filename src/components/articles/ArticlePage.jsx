import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getArticleById,
  getArticleComments,
  addArticleVotes,
} from "../../utils/api";
import ErrorPage from "../modules/ErrorPage";
import CommentCard from "./CommentCard";
import IncreaseVoteCount from "../buttons/IncreaseVoteCount";
import DecreaseVoteCount from "../buttons/DecreaseVoteCount";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articleCommentList, setArticleCommentList] = useState([]);
  const {
    title,
    author,
    created_at,
    article_img_url,
    topic,
    body,
    comment_count,
    votes,
  } = article;
  const [currVotes, setCurrVotes] = useState(votes);

  useEffect(() => {
    setError(false);
    getArticleById(article_id)
      .then((article) => {
        setLoading(false);
        setArticle(article);
        setCurrVotes(article.votes);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
    getArticleComments(article_id)
      .then((comments) => {
        setLoading(false);
        setArticleCommentList(comments);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [article_id, votes]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="border-8 m-[2em] p-[2em]">
      <div className="text-left">
        <h1>{title}</h1>
        <h2>Written by: {author}</h2>
        <p>Published: {created_at}</p>
        <h3>Topic: {topic}</h3>
        <img src={article_img_url} alt={title} className="w-full" />
        <p className="mx-28 my-8">{body}</p>
        <p>{comment_count}</p>
        <div className="flex justify-center items-center">
          <p className="border-2 rounded-full px-4 py-2 bg-green-500/50">
            {currVotes}
          </p>
        </div>
        <span className="flex justify-evenly">
          <IncreaseVoteCount
            currVotes={currVotes}
            article_id={article_id}
            setCurrVotes={setCurrVotes}
          />
          <DecreaseVoteCount
            currVotes={currVotes}
            article_id={article_id}
            setCurrVotes={setCurrVotes}
          />
        </span>
      </div>
      <div className="my-8 p-8 border-4 shadow-lg">
        <h1 className="text-center my-8 underline ">Comments</h1>
        <section className="grid grid-cols-2">
          {articleCommentList.map((comment) => {
            if (articleCommentList.length === 0) {
              return (
                <p>
                  This article doesn't have any comments yet, fancy leaving one?{" "}
                  <button>Add Comment</button>
                </p>
              );
            }
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </section>
      </div>
    </article>
  );
}
