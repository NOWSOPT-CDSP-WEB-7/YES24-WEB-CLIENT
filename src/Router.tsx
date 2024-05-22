import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
import CategoryTab from "./pages/Search/components/CategoryTab/CategoryTab";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
il";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/list" element={<SearchListPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
