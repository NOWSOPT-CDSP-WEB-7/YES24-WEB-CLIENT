import * as S from "./MainCategory.styled";

const MainCategory = () => {
  const category: string[] = [
    "콘서트",
    "뮤지컬",
    "연극",
    "클래식/무용",
    "전시/행사",
    "가족/어린이",
  ];

  return (
    <S.Category>
      {category.map((text, idx) => (
        <S.CategoryCell key={`category-${idx}`}>{text}</S.CategoryCell>
      ))}
    </S.Category>
  );
};

export default MainCategory;
