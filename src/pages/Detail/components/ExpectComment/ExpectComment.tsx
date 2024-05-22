import { IcMore } from "../../../../assets/icons";
import { COMMENT_INFO } from "../../../../constants/commentCategory";
import * as S from "./ExpectComment.styled";

const ExpectComment = () => {
  return (
    <>
      <S.PageWrapper>
        <S.NoticeLayout>
          <S.Notice>알립니다</S.Notice>
          <S.HighLight>{COMMENT_INFO.notice1}</S.HighLight>
          <S.NoticeContent>{COMMENT_INFO.notice2}</S.NoticeContent>
        </S.NoticeLayout>
        <S.BtnLayout>
          <S.WriteBtn>기대평 작성하기</S.WriteBtn>
        </S.BtnLayout>
        <S.CommentLayout>
          <S.CategoryBox>
            <S.Category $isActive={true}>최신순</S.Category>
            <S.Category $isActive={false}>조회순</S.Category>
          </S.CategoryBox>
          <>
            {COMMENT_INFO.data.map((comment) => (
              <S.CommentBox key={comment.id}>
                <S.ContentWithBtn>
                  <S.CommentContent>{comment.content}</S.CommentContent>
                  <S.ReportBtn>신고</S.ReportBtn>
                </S.ContentWithBtn>
                <S.CommentInfoBox>
                  <S.CommentInfo>{comment.id}</S.CommentInfo>
                  <S.CommentInfo>{comment.reply}</S.CommentInfo>
                  <S.CommentInfo>{comment.view}</S.CommentInfo>
                </S.CommentInfoBox>
                <S.CommentDate>{comment.date}</S.CommentDate>
              </S.CommentBox>
            ))}
          </>
          <S.BtnBox>
            <S.MoreBtn>더보기</S.MoreBtn>
            <IcMore />
          </S.BtnBox>
        </S.CommentLayout>
      </S.PageWrapper>
      <S.BannerFirst src={COMMENT_INFO.bannerImg2} />
      <S.BannerSecond src={COMMENT_INFO.bannerImg1} />
    </>
  );
};

export default ExpectComment;
