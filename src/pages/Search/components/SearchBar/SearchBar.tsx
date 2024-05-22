import * as S from "./SearchBar.styled.ts";
import { IcSearch, IcCancel } from "../../../../assets/icons";
import useChangeInput from "../../../../hooks/useChangeInput.ts";
import SearchList from "../SearchList/SearchList.tsx";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { input, handleInputChange } = useChangeInput();
  const navigate = useNavigate();
  const handleSearchClick = async () => {
    if (input.trim().length === 0) {
      return;
    }

    localStorage.setItem("searchWord", input);

    navigate("list");
  };
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <S.SearchBarAndListWrapper>
      <S.SearchBarContainer>
        <S.SearchBarWrapper>
          <S.SearchBarInput
            placeholder="검색어를 입력해주세요"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          {input.trim().length !== 0 && (
            <S.CancelBtn>
              <IcCancel />
            </S.CancelBtn>
          )}
          <S.SearchBtn onClick={handleSearchClick}>
            <IcSearch />
          </S.SearchBtn>
        </S.SearchBarWrapper>
      </S.SearchBarContainer>
      {input && <SearchList input={input} />}
    </S.SearchBarAndListWrapper>
  );
};

export default SearchBar;
