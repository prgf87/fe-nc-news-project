import React from "react";
import HomeButton from "../buttons/HomeButton";

export default function Footer() {
  return (
    <footer className="bg-zinc-700 text-zinc-200 relative bottom-0 w-full">
      <p className="text-center py-2">&copy; 2023 All Rights Reserved</p>
      <HomeButton />
    </footer>
  );
}
