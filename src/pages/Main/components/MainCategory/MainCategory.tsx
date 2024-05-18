import { CATEGORY } from "@constants/categoty";
import * as S from "./MainCategory.styled";

const MainCategory = () => {
  return (
    <S.Category>
      {CATEGORY.map((text, idx) => (
        <S.CategoryCell key={`category-${idx}`}>{text}</S.CategoryCell>
      ))}
    </S.Category>
  );
};

export default MainCategory;
