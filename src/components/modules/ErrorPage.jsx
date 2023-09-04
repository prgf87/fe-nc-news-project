import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
      <p className="text-center text-2xl mt-40">
        <span className="text-4xl text-red-500">404:</span> This page does not
        exist - please head back{" "}
        <Link to={"/"} className="link">
          home
        </Link>
      </p>
    </main>
  );
}
