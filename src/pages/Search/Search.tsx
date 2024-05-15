import { useEffect } from "react";
import * as S from "./Search.styled.ts";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";
import useGetSearchResult from "../../hooks/useGetSearchResult";

const Search = () => {
  const { getSearchResult } = useGetSearchResult();
  useEffect(() => {
    getSearchResult();
  }, []);
  return (
    <>
      <SearchHeader />
      <SearchBar />
    </>
  );
};

export default Search;
