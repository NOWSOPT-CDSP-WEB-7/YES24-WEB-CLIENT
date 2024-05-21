import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import CategoryTab from "./pages/Search/components/CategoryTab/CategoryTab";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/search" element={<Search />}>
          <Route index element={<CategoryTab />} />
          <Route path="list" element={<SearchListPage />} />
        </Route>
        <Route path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
