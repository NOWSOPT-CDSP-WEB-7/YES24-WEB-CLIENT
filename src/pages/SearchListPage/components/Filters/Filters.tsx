import { SetStateAction, useState } from "react";
import * as S from "./Filters.styled";
const filters = ["전체(136)", "뮤지컬/연극(116)", "클래식/무용(5)", "전시/행사(15)"];
const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <S.FiltersWrapper>
      {filters.map((filter, i) => {
        const isActive = activeFilter === filter;
        return (
          <S.FilterBtn key={i} $isActive={isActive} onClick={() => handleFilterClick(filter)}>
            {filter}
          </S.FilterBtn>
        );
      })}
    </S.FiltersWrapper>
  );
};

export default Filters;
