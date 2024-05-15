import * as S from "./SearchBar.styled.ts";
import { IcSearch, IcCancel } from "../../../../assets/icons";
import useChangeInput from "../../../../hooks/useChangeInput.ts";

const SearchBar = () => {
  const { input, handleInputChange } = useChangeInput();
  return (
    <S.SearchBarContainer>
      <S.SearchBarWrapper>
        <S.SearchBarInput placeholder="검색어를 입력해주세요" onChange={handleInputChange} />
        {input.trim().length !== 0 && (
          <S.CancelBtn>
            <IcCancel />
          </S.CancelBtn>
        )}
        <S.SearchBtn>
          <IcSearch />
        </S.SearchBtn>
      </S.SearchBarWrapper>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
