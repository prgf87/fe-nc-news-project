import React, { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import SingleArticle from "./SingleArticle";
import LoadingSpinner from "../modules/LoadingSpinner";
import ErrorPage from "../modules/ErrorPage";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    getArticles()
      .then(({ articles }) => {
        setLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <ul className="article--container">
        {articleList.map((article) => {
          if (loading) {
            return <p key={article.id}>Loading....</p>;
          }
          if (error) {
            return <p key={article.id}>Whoops, we couldn't find that..!</p>;
          }
          return (
            <SingleArticle
              article={article}
              key={article.article_id}
              comments={commentList}
              setCommentList={setCommentList}
            />
          );
        })}
      </ul>
    </>
  );
}
