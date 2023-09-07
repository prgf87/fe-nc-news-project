import axios from "axios";

const baseURL = "https://nc-news-api-hjp3.onrender.com/api";

const db = axios.create({
  baseURL: baseURL,
});

export const getArticles = async () => {
  const res = await db.get(`${baseURL}/articles`).catch((err) => {
    console.log(err);
  });
  const results = res.data;
  return results;
};

export const getArticleById = async (id) => {
  const res = await db.get(`${baseURL}/articles/${id}`).catch((err) => {
    console.log(err);
  });
  const article = res.data.article;
  return article;
};

export const getArticleComments = async (id) => {
  const res = await db
    .get(`${baseURL}/articles/${id}/comments`)
    .catch((err) => {
      console.log(err);
    });
  const comments = res.data.comments;
  return comments;
};

export const addArticleVotes = async (votes, id) => {
  const res = await db
    .patch(`${baseURL}/articles/${id}`, {
      inc_votes: votes + 1,
    })
    .catch((err) => {
      console.log(err);
    });
  return res.data.article.votes;
};

export const removeArticleVotes = async (votes, id) => {
  const res = await db
    .patch(`${baseURL}/articles/${id}`, {
      inc_votes: votes - 1,
    })
    .catch((err) => {
      console.log(err);
    });
  return res.data.article.votes;
};

export const addNewComment = async (comment, id) => {
  console.log(comment);
  const res = await db
    .post(`${baseURL}/articles/${id}/comments`, comment)
    .catch((err) => {
      console.log(err);
    });
  console.log(res);
  return res;
};
