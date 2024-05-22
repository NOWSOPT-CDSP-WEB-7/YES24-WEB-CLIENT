import Footer from "@components/commons/Footer/Footer";
import SearchBar from "../Search/components/SearchBar/SearchBar";
import SearchHeader from "../Search/components/SearchHeader/SearchHeader";
import FilteredResultList from "./components/FilteredResultList/FilteredResultList";
import Filters from "./components/Filters/Filters";
import * as S from "./SearchListPage.styled";

const SearchListPage = () => {
  return (
    <S.ListPageWrapper>
      <SearchHeader />
      <SearchBar />
      <S.FiltersWrapper>
        <Filters />
      </S.FiltersWrapper>
      <FilteredResultList />
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.ListPageWrapper>
  );
};

export default SearchListPage;
