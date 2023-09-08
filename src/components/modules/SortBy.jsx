import React from "react";

export default function SortBy({ searchParams, setSearchParams }) {
  const changeHandlerSortBy = (e) => {
    e.preventDefault();
    const newSort = e.target.value;
    searchParams.set("sort_by", newSort);
    setSearchParams(searchParams);
  };

  const changeHandlerOrderBy = (e) => {
    e.preventDefault();
    const newOrder = e.target.value;
    searchParams.set("order_by", newOrder);
    setSearchParams(searchParams);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearchParams();
  };

  return (
    <div className="grid lg:flex justify-center my-4">
      <form className="flex gap-x-4 justify-center items-center">
        <p>Sort By</p>
        <select
          name="sort_by"
          id="sort_by"
          onChange={(e) => {
            changeHandlerSortBy(e);
          }}
        >
          <option>-</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
          <option value="comment_count">Comments</option>
        </select>
        <p>Order By</p>
        <select
          name="order_by"
          id="order_by"
          onChange={(e) => {
            changeHandlerOrderBy(e);
          }}
        >
          <option>-</option>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </form>

      <button
        className="button w-40 mx-auto mt-4 lg:ml-8"
        onClick={handleClick}
      >
        Reset Search
      </button>
    </div>
  );
}
