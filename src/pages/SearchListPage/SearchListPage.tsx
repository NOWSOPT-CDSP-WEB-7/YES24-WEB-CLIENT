import Filters from "./components/Filters/Filters";
import * as S from "./SearchListPage.styled";

const SearchListPage = () => {
  return (
    <S.PageWrapper>
      <Filters />
    </S.PageWrapper>
  );
};

export default SearchListPage;
