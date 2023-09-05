import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage(props) {
  const { error } = props;
  const errorMessage = (
    <div className="text-center text-2xl my-80 mx-8">
      <p>
        <span className="text-4xl text-red-500">404:</span> This page does not
        exist - please head back {""}
        <Link to={"/"} className="link">
          home
        </Link>
      </p>
    </div>
  );

  if (error.code === "ERR_BAD_REQUEST") {
    return <main>{errorMessage}</main>;
  } else {
    return <main>{errorMessage}</main>;
  }
}
