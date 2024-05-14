import { SHOW_DETAIL } from "../../constants/showDetail";
import * as S from "./Detail.styled";

const Detail = () => {
  return (
    <S.DetailWrapper>
      {SHOW_DETAIL.data.map(
        ({ runShowID, genre, title, period, filmRating, location, place, image, runTime }) => (
          <S.ShowLayout key={runShowID}>
            <S.Title>
              [{location}] {title}
            </S.Title>
            <S.ShowEntireInfoLayout>
              <S.ShowImage src={image} />
              <S.ShowInfoContainer>
                <S.CategoryBox>
                  <S.Category>장르</S.Category>
                  <S.Category>일시</S.Category>
                  <S.Category>장소</S.Category>
                  <S.Category>관람등급</S.Category>
                  <S.Category>관람시간</S.Category>
                </S.CategoryBox>
                <S.InfoBox>
                  <S.Info>{genre}</S.Info>
                  <S.Info>{period}</S.Info>
                  <S.Place>{place}</S.Place>
                  <S.Info>{filmRating}세 이상 관람가</S.Info>
                  <S.Info>{runTime}분 (인터미션: 20분 포함)</S.Info>
                </S.InfoBox>
              </S.ShowInfoContainer>
            </S.ShowEntireInfoLayout>
          </S.ShowLayout>
        )
      )}
    </S.DetailWrapper>
  );
};

export default Detail;
