import axios from "axios";

const baseURL = "https://nc-news-api-hjp3.onrender.com/api";

const db = axios.create({
  baseURL: baseURL,
  timeout: 1500,
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
