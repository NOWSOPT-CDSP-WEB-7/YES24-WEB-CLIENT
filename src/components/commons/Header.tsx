import { useNavigate } from "react-router-dom";
import { IcHamburger, IcLogo, IcMy, IcSearch } from "../../assets/icons";
import * as S from "./Header.styled.ts";

interface HeaderPropTypes {
  navigateSearch?: () => void;
}

const Header = ({ navigateSearch }: HeaderPropTypes) => {
  const navigate = useNavigate();

  const handleNavigateMain = () => {
    navigate("/");
  };

  return (
    <S.HeaderWrapper>
      <S.Logo onClick={handleNavigateMain}>
        <IcLogo />
      </S.Logo>
      <S.BtnLayout>
        <S.SearchBtn onClick={navigateSearch} type="button">
          <IcSearch />
        </S.SearchBtn>
        <S.MyBtn>
          <IcMy />
        </S.MyBtn>
        <S.HamburgerBtn>
          <IcHamburger />
        </S.HamburgerBtn>
      </S.BtnLayout>
    </S.HeaderWrapper>
  );
};

export default Header;
