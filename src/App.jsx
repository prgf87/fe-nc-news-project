import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/modules/articles/ArticleList";
import ErrorPage from "./components/modules/ErrorPage";
import ArticlePage from "./components/modules/articles/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
