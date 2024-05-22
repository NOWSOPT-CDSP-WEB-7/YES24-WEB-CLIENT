import * as S from "./Search.styled.ts";
import CategoryTab from "./components/CategoryTab/CategoryTab.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SearchHeader from "./components/SearchHeader/SearchHeader.tsx";
import Footer from "@components/commons/Footer/Footer.tsx";

const Search = () => {
  return (
    <S.SearchWrapper>
      <SearchHeader />
      <SearchBar />
      <CategoryTab />
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.SearchWrapper>
  );
};

export default Search;
