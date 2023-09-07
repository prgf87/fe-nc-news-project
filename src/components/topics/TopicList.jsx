import React, { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";
import LoadingSpinner from "../modules/LoadingSpinner";
import ErrorPage from "../modules/ErrorPage";

export default function TopicList() {
  const [topicList, setTopicList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTopics()
      .then(({ topics }) => {
        setLoading(false);
        setTopicList(topics);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <h3 className="text-center mt-4">Topics</h3>
      <ul className="flex justify-center text-lg gap-x-8 uppercase">
        {topicList.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`?topic=${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
