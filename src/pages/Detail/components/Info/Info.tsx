import { DETAIL_INFO } from "../../../../constants/detailInfo";
import * as S from "./Info.styled";

const Info = () => {
  return (
    <>
      <S.InfoWrapper>
        <S.TimeLayout>
          <S.TimeTitle>공연시간</S.TimeTitle>
          <S.Time>{DETAIL_INFO.time}</S.Time>
        </S.TimeLayout>
        <S.NoticeLayout>
          <S.NoticeTitle>알립니다</S.NoticeTitle>
          <S.NoticeTime>{DETAIL_INFO.time}</S.NoticeTime>
          <S.NoticeDetail>{DETAIL_INFO.notice}</S.NoticeDetail>
        </S.NoticeLayout>
        <S.ImgLayout>
          <S.ShowFirstImg src={DETAIL_INFO.showImg1} />
          <S.ShowSecondImg src={DETAIL_INFO.showImg2} />
        </S.ImgLayout>
      </S.InfoWrapper>
      <S.BannerFirstImg src={DETAIL_INFO.bannerImg1} />
      <S.BannerSecondImg src={DETAIL_INFO.bannerImg2} />
    </>
  );
};

export default Info;
