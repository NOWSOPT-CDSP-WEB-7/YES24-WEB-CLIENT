import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" />
        <Route path="/search/list" />
        <Route path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
