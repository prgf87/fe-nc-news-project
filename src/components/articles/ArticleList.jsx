import React, { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import SingleArticle from "./SingleArticle";
import LoadingSpinner from "../modules/LoadingSpinner";
import ErrorPage from "../modules/ErrorPage";
import { useSearchParams } from "react-router-dom";
import TopicList from "../topics/TopicList";
import SortBy from "../topics/SortBy";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic") || null;
  const sort_by = searchParams.get("sort_by") || null;
  const order_by = searchParams.get("order_by") || null;

  useEffect(() => {
    setError(false);
    setLoading(true);
    getArticles(topic, sortBy, orderBy)
      .then(({ articles }) => {
        setLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [topic, sortBy, orderBy]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="border-b-2 shadow-lg">
        <TopicList />
        <SortBy setSortBy={setSortBy} setOrderBy={setOrderBy} />
      </div>
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
