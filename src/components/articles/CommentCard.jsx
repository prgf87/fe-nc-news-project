import React from "react";

export default function CommentCard({ comment }) {
  return (
    <div className="comment--card">
      <h3>{comment.title}</h3>
      <h4>{comment.author}</h4>
      <h4>{comment.topic}</h4>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p></p>
      <img
        src={comment.article_img_url}
        alt={comment.title}
        className="w-full"
      />
    </div>
  );
}
