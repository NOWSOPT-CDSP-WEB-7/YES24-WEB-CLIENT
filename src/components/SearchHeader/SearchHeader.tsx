import { IcBackBtn, IcHamburger } from "../../assets/icons";
import * as S from "./SearchHeader.styled.ts";
import { useNavigate } from "react-router-dom";

const SearchHeader = () => {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <S.HeaderWrapper>
      <S.ButtonsWrapper>
        <S.BackBtn onClick={handleNavigateBack}>
          <IcBackBtn />
        </S.BackBtn>
        <S.HamburgerBtn>
          <IcHamburger />
        </S.HamburgerBtn>
      </S.ButtonsWrapper>
      <S.SearchText>검색</S.SearchText>
    </S.HeaderWrapper>
  );
};

export default SearchHeader;
