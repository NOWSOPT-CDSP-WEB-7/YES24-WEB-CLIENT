import { useState } from "react";
import * as S from "./Category.styled";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("showInfo");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <S.CategoryWrapper>
      <S.Category
        $isSelected={selectedCategory === "showInfo"}
        onClick={() => handleCategoryClick("showInfo")}
      >
        공연정보
      </S.Category>
      <S.Category
        $isSelected={selectedCategory === "expectComment"}
        onClick={() => handleCategoryClick("expectComment")}
      >
        기대평
      </S.Category>
      <S.Category
        $isSelected={selectedCategory === "showPoster"}
        onClick={() => handleCategoryClick("showPoster")}
      >
        공연 이미지
      </S.Category>
      <S.Category
        $isSelected={selectedCategory === "productInfo"}
        onClick={() => handleCategoryClick("productInfo")}
      >
        상품정보
      </S.Category>
    </S.CategoryWrapper>
  );
};

export default Category;
