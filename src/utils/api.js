import axios from "axios";

// const baseURL = "http://localhost:9090/api";
const baseURL = "http://nc-news-api.globalwebsystems.co.uk/api";

const db = axios.create({
  baseURL: baseURL,
});

export const getArticles = async (topic, sort_by, order_by) => {
  const res = await db
    .get(
      `${baseURL}/articles` +
        (topic ? `?topic=${topic}` : "") +
        (sort_by && topic ? `&sort_by=${sort_by}` : "") +
        (order_by && topic ? `&order_by=${order_by}` : "")
    )
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
  return res.data;
};

export const getTopics = async () => {
  const res = await db.get(`${baseURL}/topics`).catch((err) => {
    console.log(err);
  });
  const results = res.data;
  return results;
};

export const deleteComment = async (id) => {
  const res = await db.delete(`${baseURL}/comments/${id}`).catch((err) => {
    console.log(err);
  });
  return res;
};
