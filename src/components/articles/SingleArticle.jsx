import React from "react";
import { Link } from "react-router-dom";
// import { getArticleComments, patchArticleVotes } from "../../utils/api";

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
    article_id,
  } = article;

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(true);

  // const vote = { inc_votes: 1 };

  // useEffect(() => {
  //   getArticleComments(article_id)
  //     .then((comments) => {
  //       setLoading(false);
  //       setCommentList(comments);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(err);
  //     });
  // }, [votes]);

  // const handlePatch = (e) => {
  //   console.log(e);
  //   return;
  //   patchArticleVotes(vote, article_id);
  // };

  return (
    <li className="article--single">
      <Link to={`/articles/${article_id}`}>
        <h1>{title}</h1>
        <h3>by: {author}</h3>
        <img src={article_img_url} alt={title} className="h-40" />
        <h4>{created_at}</h4>
        <p>{topic}</p>
        <p>{body}</p>
        <p>{comment_count}</p>
        <p>{votes}</p>
      </Link>
    </li>
  );
}
