import { IcBtnShare, IcHeartFill } from "../../assets/icons";
import Header from "../../components/commons/Header/Header";
import { SHOW_DETAIL } from "../../constants/showDetail";
import { categories } from "../../constants/showDetailCategory";
import * as S from "./Detail.styled";

const Detail = () => {
  return (
    <>
      <Header />
      {SHOW_DETAIL.data.map(
        ({ runShowID, genre, title, period, filmRating, location, place, image, runTime }) => (
          <S.ShowLayout key={runShowID}>
            <S.Title>
              [{location}] {title}
            </S.Title>
            <S.ShowContainer>
              <S.ShowImage src={image} />
              <S.InfoWithBtnLayout>
                <S.ShowInfoContainer>
                  <S.CategoryBox>
                    {categories.map((category) => (
                      <S.Category>{category}</S.Category>
                    ))}
                  </S.CategoryBox>
                  <S.InfoBox>
                    <S.Info>{genre}</S.Info>
                    <S.Info>{period}</S.Info>
                    <S.Place>{place}</S.Place>
                    <S.Info>{filmRating}세 이상 관람가</S.Info>
                    <S.Info>{runTime}분 (인터미션: 20분 포함)</S.Info>
                  </S.InfoBox>
                </S.ShowInfoContainer>
                <S.BtnLayout>
                  <S.HeartBtnBox>
                    <IcHeartFill />
                    <S.HeartNum>48</S.HeartNum>
                  </S.HeartBtnBox>
                  <IcBtnShare />
                </S.BtnLayout>
              </S.InfoWithBtnLayout>
            </S.ShowContainer>
          </S.ShowLayout>
        )
      )}
    </>
  );
};

export default Detail;
