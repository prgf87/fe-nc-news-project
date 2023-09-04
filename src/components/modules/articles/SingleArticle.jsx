import React from "react";

export default function SingleArticle({ article }) {
  const {
    title,
    topic,
    author,
    body,
    article_img_url,
    comment_count,
    created_at,
    votes,
  } = article;
  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{created_at}</h3>
      <p>{topic}</p>
      <p>{body}</p>
      <img src={article_img_url} alt={title} className="h-40" />
      <p>{comment_count}</p>
      <p>{votes}</p>
    </article>
  );
}
