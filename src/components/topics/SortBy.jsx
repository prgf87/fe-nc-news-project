import React from "react";
import { Link } from "react-router-dom";

export default function SortBy({ setSortBy, setOrderBy }) {
  const changeHandlerSortBy = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };
  const changeHandlerOrderBy = (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <form className="flex gap-x-8">
        <select
          name="sort_by"
          id="sort_by"
          onChange={(e) => {
            changeHandlerSortBy(e);
          }}
        >
          <option value="date">Date</option>
          <option value="votes">Votes</option>
          <option value="comments">Comments</option>
        </select>
        <select
          name="order_by"
          id="order_by"
          onChange={(e) => {
            changeHandlerOrderBy(e);
          }}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </form>
    </div>
  );
}
