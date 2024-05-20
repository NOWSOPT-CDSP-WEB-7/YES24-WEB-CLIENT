import { Outlet } from "react-router-dom";
import * as S from "./Search.styled.ts";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";

const Search = () => {
  return (
    <>
      <SearchHeader />
      <SearchBar />
      <Outlet />
    </>
  );
};

export default Search;
