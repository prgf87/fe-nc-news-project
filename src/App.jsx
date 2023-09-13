import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/articles/ArticleList";
import ErrorPage from "./components/modules/ErrorPage";
import ArticlePage from "./components/articles/ArticlePage";
import Layout from "./components/modules/Layout";
import UserList from "./components/users/UserList";
import ProfilePage from "./components/users/ProfilePage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:username" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
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
