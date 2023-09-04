import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { users } = useContext(UserContext);
  return (
    <header className="sticky max-w-5xl mx-auto mt-2 border-b-2 shadow-sm">
      <main className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="webpage logo - the letter News surrounded by a globe"
            className="h-20"
          />
        </Link>
        {/* <h1>Header</h1> */}
        <section>
          <aside className="flex items-center">
            <img
              src={users[0].avatar_url}
              alt="Avatar for the currently signed-in user account"
              className="h-10 rounded-full"
            />
            <h2 className="mr-8 ml-2">{users[0].username}</h2>
          </aside>
          <Link
            to={"/users"}
            className="link text-xs pl-20 relative top-[-14px]"
          >
            Change user
          </Link>
        </section>
      </main>
      <Navbar />
    </header>
  );
}
