import { useState } from "react";
import * as S from "./CategoryTab.styled";
import RecentWord from "../RecentWord/RecentWord";
import RecentShow from "../RecentShow/RecentShow";

const CategoryTab = () => {
  const [selectedCategory, setSelectedCategory] = useState("word");

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <S.CategoryWrapper>
        <S.Category
          $isSelected={selectedCategory === "word"}
          onClick={() => handleClickCategory("word")}
        >
          최근 검색어
        </S.Category>
        <S.Category
          $isSelected={selectedCategory === "show"}
          onClick={() => handleClickCategory("show")}
        >
          최근 검색 공연
        </S.Category>
      </S.CategoryWrapper>
      {selectedCategory === "word" ? <RecentWord /> : <RecentShow />}
    </>
  );
};

export default CategoryTab;
