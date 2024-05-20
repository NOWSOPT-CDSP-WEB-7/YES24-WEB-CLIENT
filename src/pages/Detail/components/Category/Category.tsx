import { useState } from "react";

import ExpectComment from "../ExpectComment/ExpectComment";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Info } from "../ShowInfo/ShowInfo.styled";
import ShowPoster from "../ShowPoster/ShowPoster";
import * as S from "./Category.styled";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Info");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <S.CategoryWrapper>
        <S.Category
          $isSelected={selectedCategory === "Info"}
          onClick={() => handleCategoryClick("Info")}
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
      {selectedCategory === "Info" ? (
        <Info />
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
