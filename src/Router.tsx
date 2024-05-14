import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/search" />
        <Route path="/search/list" />
        <Route path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
