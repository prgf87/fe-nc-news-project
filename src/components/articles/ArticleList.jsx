import React, { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import SingleArticle from "./SingleArticle";
import LoadingSpinner from "../modules/LoadingSpinner";
import ErrorPage from "../modules/ErrorPage";
import { useSearchParams } from "react-router-dom";
import TopicList from "../topics/TopicList";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || null;

  useEffect(() => {
    setError(false);
    setLoading(true);
    getArticles(topic)
      .then(({ articles }) => {
        setLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [topic]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <TopicList />
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
