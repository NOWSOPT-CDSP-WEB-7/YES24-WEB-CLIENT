import Footer from "@components/commons/Footer/Footer";
import SearchBar from "../Search/components/SearchBar/SearchBar";
import SearchHeader from "../Search/components/SearchHeader/SearchHeader";
import * as S from "./SearchListPage.styled";
import FiltersAndResult from "./components/FiltersAndResult/FiltersAndResult";

const SearchListPage = () => {
  return (
    <S.ListPageWrapper>
      <SearchHeader />
      <SearchBar />
      <FiltersAndResult />
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.ListPageWrapper>
  );
};

export default SearchListPage;
