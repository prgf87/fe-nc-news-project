import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage(error) {
  const errorMessage400 = (
    <div className="text-center text-2xl my-80 mx-8">
      <p>
        <span className="text-4xl text-red-500">400:</span> You cannot do that -
        please head back {""}
        <Link to={"/"} className="link">
          home
        </Link>
      </p>
    </div>
  );

  const errorMessage404 = (
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

  const errorMessage500 = (
    <div className="text-center text-2xl my-80 mx-8">
      <p>
        <span className="text-4xl text-red-500">500:</span> The server did not
        like that - please head back {""}
        <Link to={"/"} className="link">
          home
        </Link>
      </p>
    </div>
  );

  if (error.code === "ERR_BAD_REQUEST" || 404) {
    return <main>{errorMessage404}</main>;
  } else if (error.code === 400) {
    return <main>{errorMessage400}</main>;
  } else {
    return <main>{errorMessage500}</main>;
  }
}
