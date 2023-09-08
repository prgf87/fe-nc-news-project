import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout({ title, children }) {
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <Header title={title} />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
