import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import ErrorPage from "../modules/ErrorPage";
import CommentCard from "./CommentCard";

export default function ArticlePage({ commentList }) {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(false);
    getArticleById(article_id)
      .then((article) => {
        setLoading(false);
        setArticle(article);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [article_id]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="border-8 m-[2em] p-[2em]">
      <content className="text-left">
        <h1>{article.title}</h1>
        <h2>Written by: {article.author}</h2>
        <p>Published: {article.created_at}</p>
        <h3>Topic: {article.topic}</h3>
        <img
          src={article.article_img_url}
          alt={article.title}
          className="w-full"
        />
        <p>{article.body}</p>
        <p>{article.comment_count}</p>
        <p>{article.votes}</p>
      </content>
      <div className="my-8 p-8 border-4 shadow-lg">
        <h1 className="text-center">Comments</h1>
        <section className="grid grid-cols-2">
          {commentList.map((comment) => {
            if (commentList.length === 0) {
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
