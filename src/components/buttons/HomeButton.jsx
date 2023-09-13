import React from "react";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <div className="flex justify-center items-center pb-4">
      <Link to={"/"} className="link ">
        <button className="button">Go Home</button>
      </Link>
    </div>
  );
}
