import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../utils/api";
import ErrorPage from "../ErrorPage";

export default function ArticlePage() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <article className="mx-80">
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <h3>{article.created_at}</h3>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={article.title} className="h-40" />
      <p>{article.comment_count}</p>
      <p>{article.votes}</p>
    </article>
  );
}
