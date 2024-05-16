import { useState } from "react";
import * as S from "./Category.styled";
import ExpectComment from "./ExpectComment";
import ProductInfo from "./ProductInfo";
import ShowInfo from "./ShowInfo";
import ShowPoster from "./ShowPoster";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("showInfo");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    return category;
  };

  return (
    <>
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
      {selectedCategory === "showInfo" ? (
        <ShowInfo />
      ) : selectedCategory === "expectComment" ? (
        <ExpectComment />
      ) : selectedCategory === "showPoster" ? (
        <ShowPoster />
      ) : selectedCategory === "productInfo" ? (
        <ProductInfo />
      ) : (
        ""
      )}
    </>
  );
};

export default Category;
