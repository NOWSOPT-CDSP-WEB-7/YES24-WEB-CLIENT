import * as S from "./SearchedShow.styled";
import showImg from "../../../assets/images/show.png";
import useGetSearchResult from "../../../hooks/useGetSearchResult";
import DeleteAllBtn from "../DeleteAllBtn/DeleteAllBtn";
const SearchedShow = () => {
  return (
    <>
      <S.ShowWrapper>
        <S.ShowImg src={showImg} />
        <S.ShowRightSec>
          <S.ShowStatusBtns>
            <S.StatusBtn color={"Text_01"} backcolor={"UI_02"}>
              예매마감
            </S.StatusBtn>
            <S.StatusBtn color={"UI_background"} backcolor={"Tertiary_red"}>
              예매중
            </S.StatusBtn>
            <S.StatusBtn color={"UI_background"} backcolor={"Sub_purple"}>
              단독
            </S.StatusBtn>
          </S.ShowStatusBtns>
          <S.Title>[울산] 뮤지컬 [레베카] 10주년 기념 공연 앙코르</S.Title>
          <S.PeriodAndPlace>
            <S.Period>2024.06.13 ~ 2024.04.14</S.Period>
            <S.Place>공연 장소</S.Place>
          </S.PeriodAndPlace>
        </S.ShowRightSec>
      </S.ShowWrapper>
      <DeleteAllBtn />
    </>
  );
};

export default SearchedShow;
