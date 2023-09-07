import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/articles/ArticleList";
import ErrorPage from "./components/modules/ErrorPage";
import ArticlePage from "./components/articles/ArticlePage";
import Layout from "./components/modules/Layout";

function App() {
  return (
    <>
      <Layout title={"Home Page -"}>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="?topic=value" element={<ArticlePage />} />
          <Route
            path="*"
            element={<ErrorPage props={{ error: { code: 404 } }} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
