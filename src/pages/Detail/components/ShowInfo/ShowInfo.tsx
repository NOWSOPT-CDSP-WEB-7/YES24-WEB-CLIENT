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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShowDetail(Number(runShowId));
        setShowData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [runShowId]);

  const handleLikeClick = async () => {
    try {
      const likeStatus = await patchLike(Number(runShowId));
      setIsLike(likeStatus ?? false);
      setShowData((prevData) => {
        if (!prevData) {
          return prevData;
        }
        const updatedLikeCount = likeStatus ? prevData.likeCount + 1 : prevData.likeCount - 1;
        return { ...prevData, likeCount: updatedLikeCount };
      });
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
                <S.HeartNum>{showData?.likeCount}</S.HeartNum>
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
