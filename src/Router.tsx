import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
import SearchListPage from "./pages/SearchListPage/SearchListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/search" element={<Search />} />
        <Route path="/search/list" element={<SearchListPage />} />
        <Route path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
