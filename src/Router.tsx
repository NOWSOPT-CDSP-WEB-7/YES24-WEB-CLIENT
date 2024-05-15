import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/search" element={<Search />} />
        <Route path="/search/list" />
        <Route path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
