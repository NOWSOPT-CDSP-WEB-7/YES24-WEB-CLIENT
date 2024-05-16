import { useState } from "react";
import * as S from "./Category.styled";

const Category = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <S.CategoryWrapper>
      <S.Category $isSelected={isSelected}>공연정보</S.Category>
      <S.Category $isSelected={isSelected}>기대평</S.Category>
      <S.Category $isSelected={isSelected}>공연 이미지</S.Category>
      <S.Category $isSelected={isSelected}>상품정보</S.Category>
    </S.CategoryWrapper>
  );
};

export default Category;
