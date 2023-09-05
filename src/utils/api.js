import axios from "axios";

const baseURL = "https://nc-news-api-hjp3.onrender.com/api";

const db = axios.create({
  baseURL: baseURL,
});

export const getArticles = async () => {
  const res = await db.get(`${baseURL}/articles`);
  const results = res.data;
  return results;
};

export const getArticleById = async (id) => {
  const res = await db.get(`${baseURL}/articles/${id}`);
  const article = res.data.article;
  return article;
};

export const getArticleComments = async (id) => {
  const res = await db.get(`${baseURL}/articles/${id}/comments`);
  const comments = res.data.comments;
  return comments;
};

export const patchArticleVotes = async (id, vote) => {
  const res = await db.patch(vote, `${baseURL}/articles/${id}`);
  console.log(res.data);
};
