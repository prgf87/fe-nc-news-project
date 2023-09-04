import axios from "axios";

const baseURL = "https://nc-news-api-hjp3.onrender.com/api";

export const getArticles = async () => {
  const res = await axios.get(`${baseURL}/articles`);
  const results = res.data;
  return results;
};

export const getArticleById = async (id) => {
  const res = await axios.get(`${baseURL}/articles/${id}`);
  const results = res.data.article;
  return results;
};
