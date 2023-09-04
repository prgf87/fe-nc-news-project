import React, { useEffect, useState } from "react";
import { getArticles } from "../../../utils/api";
import SingleArticle from "./SingleArticle";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticleList(data.articles);
    });
  }, []);

  return (
    <main>
      <ul className="grid grid-cols-2">
        {articleList.map((article) => {
          return (
            <li key={article.id} className="article__container">
              <SingleArticle article={article} />;
            </li>
          );
        })}
      </ul>
    </main>
  );
}
