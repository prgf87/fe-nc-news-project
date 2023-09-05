import React from "react";

export default function CommentCard({ comment }) {
  return (
    <div>
      <h2>{comment.title}</h2>
      <h3>{comment.author}</h3>
      <h3>{comment.topic}</h3>
      <Date>{comment.created_at}</Date>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p></p>
      <img src={comment.article_img_url} alt={comment.title} className="h-20" />
    </div>
  );
}
