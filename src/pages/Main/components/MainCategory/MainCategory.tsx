import * as S from "./MainCategory.styled";

const MainCategory = () => {
  return (
    <S.Category>
      <S.CategoryCell>콘서트</S.CategoryCell>
      <S.CategoryCell>뮤지컬</S.CategoryCell>
      <S.CategoryCell>연극</S.CategoryCell>
      <S.CategoryCell>클래식/무용</S.CategoryCell>
      <S.CategoryCell>전시/행사</S.CategoryCell>
      <S.CategoryCell>가족/어린이</S.CategoryCell>
    </S.Category>
  );
};

export default MainCategory;
