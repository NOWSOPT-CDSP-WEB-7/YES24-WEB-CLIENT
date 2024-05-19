import * as S from "./Search.styled.ts";
import RecentShows from "./components/RecentShows/RecentShows.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";

const Search = () => {
  return (
    <>
      <SearchHeader />
      <SearchBar />
      <RecentShows />
    </>
  );
};

export default Search;
