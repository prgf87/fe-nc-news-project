import React from "react";

export default function SortBy({ searchParams, setSearchParams }) {
  const changeHandlerSortBy = (e) => {
    e.preventDefault();
    setSearchParams((currSearch) => {
      if (currSearch === 0) {
        return `?sort_by=${e.target.value}`;
      } else {
        return `${currSearch}&sort_by=${e.target.value}`;
      }
    });
  };
  const changeHandlerOrderBy = (e) => {
    e.preventDefault();
    setSearchParams((currSearch) => {
      console.log(searchParams);
      if (currSearch === 0) {
        return `?order_by=${e.target.value}`;
      } else {
        return `${currSearch}&order_by=${e.target.value}`;
      }
    });
  };

  return (
    <div className="flex justify-center my-4">
      <form className="flex gap-x-8">
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
    </div>
  );
}
