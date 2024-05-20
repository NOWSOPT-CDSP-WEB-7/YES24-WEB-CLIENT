import { DETAIL_INFO } from "../../../../constants/detailInfo";
import * as S from "./Info.styled";

const Info = () => {
  return (
    <S.InfoWrapper>
      <S.TimeTitle>공연시간</S.TimeTitle>
      <S.Time>{DETAIL_INFO.time}</S.Time>
      <S.NoticeTitle>알립니다</S.NoticeTitle>
      <S.NoticeTime>{DETAIL_INFO.time}</S.NoticeTime>
      <S.ShowImg src={DETAIL_INFO.showImg1} />
      <S.ShowImg src={DETAIL_INFO.showImg2} />
    </S.InfoWrapper>
  );
};

export default Info;
