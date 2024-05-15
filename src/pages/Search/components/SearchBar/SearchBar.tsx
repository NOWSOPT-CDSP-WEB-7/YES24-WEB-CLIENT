import * as S from "./SearchBar.styled.ts";
import { IcSearch } from "../../../../assets/icons";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarWrapper>
        <S.SearchBarInput placeholder="검색어를 입력해주세요" />
        <S.SearchBtn>
          <IcSearch />
        </S.SearchBtn>
      </S.SearchBarWrapper>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
