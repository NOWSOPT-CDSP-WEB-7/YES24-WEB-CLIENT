import * as S from "./SearchBar.styled.ts";
import { IcSearch, IcCancel } from "../../../../assets/icons";
import useChangeInput from "../../../../hooks/useChangeInput.ts";
import SearchList from "../SearchList/SearchList.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const { input, setInput, handleInputChange } = useChangeInput();
  const navigate = useNavigate();
  const location = useLocation();
  const [recentWordsList, setRecentWordsList] = useState<string[]>([]);

  useEffect(() => {
    const savedInputWord = localStorage.getItem("searchWord");
    const savedRecentWordsList = localStorage.getItem("recentWordsList");
    if (savedInputWord) {
      setInput(savedInputWord);
    }
    if (location.pathname === "/search") {
      localStorage.removeItem("searchWord");
      setInput("");
    }
    if (savedRecentWordsList) {
      setRecentWordsList(JSON.parse(savedRecentWordsList));
    }
  }, [setInput, location.pathname]);

  const updateRecentWordsList = (newWord: string) => {
    localStorage.setItem("searchWord", newWord);
    const updatedRecentWordsList = [newWord, ...recentWordsList.filter((word) => word !== newWord)];
    setRecentWordsList(updatedRecentWordsList);
    localStorage.setItem("recentWordsList", JSON.stringify(updatedRecentWordsList));
  };

  const handleSearchClick = async () => {
    if (input.trim().length === 0) {
      return;
    }

    updateRecentWordsList(input);

    if (location.pathname === "/search") {
      navigate("list");
    }
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
            value={input}
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
      {location.pathname === "/search" && input && <SearchList input={input} />}
    </S.SearchBarAndListWrapper>
  );
};

export default SearchBar;
