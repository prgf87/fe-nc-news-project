import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/modules/ArticleList";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <ArticleList />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
