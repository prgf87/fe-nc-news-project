import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { users } = useContext(UserContext);
  return (
    <header className="sticky max-w-[100vw] mx-auto mt-2 border-b-2 shadow-sm">
      <main className="flex justify-between items-center max-w-5xl mx-auto">
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="webpage logo - the letter News surrounded by a globe"
            className="h-20"
          />
        </Link>
        <section>
          <Link to={`/users/${users[0].username}`}>
            <aside className="flex items-center">
              <img
                src={users[0].avatar_url}
                alt="Avatar for the currently signed-in user account"
                className="h-10 rounded-full"
              />
              <p className="mr-8 ml-2">{users[0].username}</p>
            </aside>
          </Link>
          <div className="absolute">
            <Link
              to={"/users"}
              className="link text-xs pl-14 relative top-[-14px]"
            >
              Change user
            </Link>
          </div>
        </section>
      </main>
      <Navbar />
    </header>
  );
}
