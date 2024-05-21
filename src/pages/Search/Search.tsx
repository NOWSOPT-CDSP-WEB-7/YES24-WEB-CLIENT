import * as S from "./Search.styled.ts";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";
import CategoryTab from "./components/CategoryTab/CategoryTab.tsx";
import Footer from "../../components/commons/Footer.tsx";

const Search = () => {
  return (
    <S.SearchWrapper>
      <SearchHeader />
      <SearchBar />
      <CategoryTab />
      <Footer />
    </S.SearchWrapper>
  );
};

export default Search;
