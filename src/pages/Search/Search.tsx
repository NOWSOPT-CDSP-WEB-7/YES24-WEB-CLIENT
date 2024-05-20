import CategoryTab from "./components/CategoryTab/CategoryTab.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";

const Search = () => {
  return (
    <>
      <SearchHeader />
      <SearchBar />
      <CategoryTab />
    </>
  );
};

export default Search;
