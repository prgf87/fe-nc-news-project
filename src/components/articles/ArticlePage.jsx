import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../../utils/api";
import ErrorPage from "../modules/ErrorPage";
import CommentCard from "./CommentCard";
import IncreaseVoteCount from "../buttons/IncreaseVoteCount";
import DecreaseVoteCount from "../buttons/DecreaseVoteCount";
import CommentAdder from "../forms/CommentAdder";

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
  }, [article_id, votes, articleCommentList, comment_count]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="border-4 rounded-xl m-[1em] p-[1em]">
      <div className="text-left">
        <h1>{title}</h1>
        <h2>Written by: {author}</h2>
        <p>Published: {created_at}</p>
        <h3>Topic: {topic}</h3>
        <img src={article_img_url} alt={title} className="w-full" />
        <p className="md:mx-28 my-8">{body}</p>

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
        <h1 className="text-center mb-8 underline ">Comments</h1>
        <CommentAdder
          article_id={article_id}
          setArticleCommentList={setArticleCommentList}
        />
        <p className="p-2">Comments: {comment_count}</p>
        <section className="comment--container">
          {articleCommentList.map((comment) => {
            if (articleCommentList.length === 0) {
              return (
                <p>
                  This article doesn't have any comments yet, fancy leaving one?{" "}
                  <button>Add Comment</button>
                </p>
              );
            }
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                setArticleCommentList={setArticleCommentList}
              />
            );
          })}
        </section>
      </div>
    </article>
  );
}

//add disable when user clicks like - use cookies
