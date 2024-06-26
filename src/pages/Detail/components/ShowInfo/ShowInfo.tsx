import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IcBtnShare, IcHeartEmpty, IcHeartFill } from "../../../../assets/icons";
import { categories } from "../../../../constants/showDetailCategory";

import * as S from "./ShowInfo.styled";
import { ShowDetailPropTypes, fetchShowDetail } from "../../../../apis/Detail/fetchShowDetail";
import { patchLike } from "../../../../apis/Detail/patchLike";

const ShowInfo = () => {
  const { runShowId } = useParams();
  const [showData, setShowData] = useState<ShowDetailPropTypes>();
  const [isLike, setIsLike] = useState(false);
  const [isLikeCount, setIsLikeCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShowDetail(Number(runShowId));
        setShowData(data);
        setIsLikeCount(data?.likeCount ?? 0);
        const initialLike = await patchLike(Number(runShowId));
        setIsLike(initialLike ?? false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [runShowId]);

  // 좋아요 버튼 눌렀을 때 동작하는 핸들러
  const handleLikeClick = async () => {
    try {
      const likeStatus = !isLike;
      setIsLike(likeStatus);
      setIsLikeCount((prev) => (likeStatus ? prev + 1 : prev - 1));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.ShowWrapper key={showData?.runShowID}>
        <S.Title>
          [{showData?.location}] {showData?.title}
        </S.Title>
        <S.ShowContentLayout>
          <S.ShowImage src={showData?.imgUrl} alt="공연 포스터" />
          <S.InfoWithBtnLayout>
            <S.ShowInfoContainer>
              <S.CategoryBox>
                {categories.map((category, index) => (
                  <S.Category key={index}>{category}</S.Category>
                ))}
              </S.CategoryBox>
              <S.InfoBox>
                <S.Info>{showData?.genre}</S.Info>
                <S.Info>{showData?.period}</S.Info>
                <S.Place>{showData?.place}</S.Place>
                <S.Info>{showData?.filmRating}세 이상 관람가</S.Info>
                <S.Info>{showData?.runTime}분 (인터미션: 20분 포함)</S.Info>
              </S.InfoBox>
            </S.ShowInfoContainer>
            <S.BtnLayout>
              <S.HeartBtnBox onClick={handleLikeClick}>
                {isLike ? <IcHeartFill /> : <IcHeartEmpty />}
                <S.HeartNum>{isLikeCount}</S.HeartNum>
              </S.HeartBtnBox>
              <IcBtnShare />
            </S.BtnLayout>
          </S.InfoWithBtnLayout>
        </S.ShowContentLayout>
      </S.ShowWrapper>
    </>
  );
};

export default ShowInfo;
