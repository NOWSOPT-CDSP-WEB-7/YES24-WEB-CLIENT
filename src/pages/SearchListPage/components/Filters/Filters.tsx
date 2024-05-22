import { useState } from "react";
import * as S from "./Filters.styled";
import { IcDropDown } from "../../../../assets/icons";

const filters = ["전체(136)", "뮤지컬/연극(116)", "클래식/무용(5)", "전시/행사(15)"];
const options = ["정확도순", "공연임박순", "판매많은순"];
const Filters = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(filters[0]);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const toggleDropdown = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
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
      <S.FilterResultAndSort>
        <S.FilterResult>총 116개의 검색 결과가 나왔습니다.</S.FilterResult>
        <S.SortBox>
          <S.SelectSortWrapper>
            <S.SelectedSort>{selectedOption}</S.SelectedSort>
            <S.DropdownBtn onClick={toggleDropdown}>
              <IcDropDown />
            </S.DropdownBtn>
          </S.SelectSortWrapper>
          {isOpen && (
            <S.SortList>
              {options.map((opt, i) => (
                <S.SortItem key={i} onClick={() => handleOptionClick(opt)}>
                  {opt}
                </S.SortItem>
              ))}
            </S.SortList>
          )}
        </S.SortBox>
      </S.FilterResultAndSort>
    </>
  );
};

export default Filters;
