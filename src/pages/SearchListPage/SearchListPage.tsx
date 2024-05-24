import SearchBar from "../Search/components/SearchBar/SearchBar";
import SearchHeader from "../Search/components/SearchHeader/SearchHeader";
import Filters from "./components/Filters/Filters";
import * as S from "./SearchListPage.styled";

const SearchListPage = () => {
  return (
    <>
      <SearchHeader />
      <SearchBar />
      <S.PageWrapper>
        <Filters />
      </S.PageWrapper>
    </>
  );
};

export default SearchListPage;
