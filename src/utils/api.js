import axios from "axios";

// const baseURL = "http://localhost:9090/api";
const baseURL = "https://nc-news-api-hjp3.onrender.com/api";

const db = axios.create({
  baseURL: baseURL,
});

export const getArticles = async (topic, sortBy, orderBy) => {
  console.log(sortBy, orderBy);
  const res = await db
    .get(`${baseURL}/articles` + (topic ? `?topic=${topic}` : ""))
    .catch((err) => {
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
  const res = await db
    .post(`${baseURL}/articles/${id}/comments`, comment)
    .catch((err) => {
      console.log(err);
    });
  console.log(res);
  return res;
};

export const getTopics = async () => {
  const res = await db.get(`${baseURL}/topics`).catch((err) => {
    console.log(err);
  });
  const results = res.data;
  return results;
};
