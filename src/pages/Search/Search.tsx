import * as S from "./Search.styled.ts";
import RecentWords from "./components/RecentWords/RecentWords.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";

const Search = () => {
  return (
    <>
      <SearchHeader />
      <SearchBar />
      <RecentWords />
    </>
  );
};

export default Search;
