import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-700 text-zinc-200 relative bottom-0 w-full">
      <p className="text-center py-2">&copy; 2023 All Rights Reserved</p>
      <div className="flex justify-center items-center pb-4">
        <Link to={"/"} className="link ">
          <button className="button">Go Home</button>
        </Link>
      </div>
    </footer>
  );
}
