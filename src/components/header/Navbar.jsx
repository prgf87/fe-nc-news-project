import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center gap-x-4">
        <li>
          <button className="button2">
            <Link to={"/"}>Home</Link>
          </button>
        </li>
        <li>
          <button className="button2">
            <Link to={"/users"}>Users</Link>
          </button>
        </li>
        <li>
          <button className="button2">
            <Link to={"/profile"}>My Profile</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
