import React, { useEffect, useState } from "react";
import { getArticles } from "../../../utils/api";
import SingleArticle from "./SingleArticle";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getArticles()
      .then((data) => {
        setIsLoading(false);
        setArticleList(data.articles);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <main>
      <ul className="grid grid-cols-2">
        {articleList.map((article) => {
          if (isLoading) {
            return <p key={article.id}>Loading....</p>;
          }
          if (isError) {
            return <p key={article.id}>Whoops, we couldn't find that..!</p>;
          }
          return <SingleArticle article={article} key={article.article_id} />;
        })}
      </ul>
    </main>
  );
}
