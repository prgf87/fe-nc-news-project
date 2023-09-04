import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage(props) {
  const { error } = props;

  if (error.code === "ERR_BAD_REQUEST") {
    return (
      <main>
        <p className="text-center text-2xl mt-40">
          <span className="text-4xl text-red-500">404:</span> This article no
          longer exists - please head back {""}
          <Link to={"/"} className="link">
            home
          </Link>
        </p>
      </main>
    );
  } else {
    return (
      <main>
        <p className="text-center text-2xl mt-40">
          <span className="text-4xl text-red-500">404:</span> This page does not
          exist - please head back {""}
          <Link to={"/"} className="link">
            home
          </Link>
        </p>
      </main>
    );
  }
}
