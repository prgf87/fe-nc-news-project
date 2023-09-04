import axios from "axios";

const baseURL = "http://nc-news-api-hjp3.onrender.com/api";

export const getArticles = async () => {
  const res = await axios.get(`${baseURL}/articles`);
  const results = res.data;
  return results;
};
