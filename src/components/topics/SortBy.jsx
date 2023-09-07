import React from "react";

export default function SortBy({ sortBy, orderBy, setSortBy, setOrderBy }) {
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
          name="sortby"
          id="sortby"
          onChange={(e) => {
            changeHandlerSortBy(e);
          }}
        >
          <option value="default">Default</option>
          <option value="date">Date </option>
          <option value="votes">Votes</option>
          <option value="comments">Comments</option>
        </select>
        <select
          name="orderby"
          id="orderby"
          onChange={(e) => {
            changeHandlerOrderBy(e);
          }}
        >
          <option value={orderBy}>Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </form>
    </div>
  );
}
