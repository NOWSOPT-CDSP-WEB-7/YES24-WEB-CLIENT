import { IcBtnShare, IcHeartFill } from "../../../assets/icons";
import { categories } from "../../../constants/showDetailCategory";
import { SHOW_DETAIL } from "../../../constants/showDetailData";

import * as S from "./ShowInfo.styled";

const ShowInfo = () => {
  return (
    <>
      {SHOW_DETAIL.data.map(
        ({ runShowID, genre, title, period, filmRating, location, place, image, runtime }) => (
          <S.ShowWrapper key={runShowID}>
            <S.Title>
              [{location}] {title}
            </S.Title>
            <S.ShowContentLayout>
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
                    <S.Info>{runtime}분 (인터미션: 20분 포함)</S.Info>
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
            </S.ShowContentLayout>
          </S.ShowWrapper>
        )
      )}
    </>
  );
};

export default ShowInfo;
