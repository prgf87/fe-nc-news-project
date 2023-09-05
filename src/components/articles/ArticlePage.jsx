import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../../utils/api";
import ErrorPage from "../modules/ErrorPage";
import CommentCard from "./CommentCard";

export default function ArticlePage() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setIsLoading(false);
        setArticle(article);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
    getArticleComments(article_id)
      .then((comments) => {
        setIsLoading(false);
        setCommentList(comments);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
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
      <div className="my-8 border-4 shadow-lg">
        <h1 className="text-center">Comments</h1>
      </div>
      <section className="grid grid-cols-2">
        {commentList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </article>
  );
}
