import { useState } from "react";
import * as S from "./Filters.styled";
import { IcDropDown } from "../../../../assets/icons";

const options = ["정확도순", "공연임박순", "판매많은순"];

interface FixedFilterPropTypes {
  name: string;
}
interface GenreToFilterPropTypes {
  [key: string]: string[];
}
interface FiltersPropTypes {
  genres: string[];
  handleGenreClick: (clickedGenres: string[]) => void;
}
// 고정된 필터 이름 배열
const fixedFilters: FixedFilterPropTypes[] = [
  { name: "전체" },
  { name: "뮤지컬/연극" },
  { name: "클래식/무용" },
  { name: "전시/행사" },
  { name: "콘서트" },
];

// 각 장르가 어떤 필터에 속하는지 정의
const genreToFilter: GenreToFilterPropTypes = {
  musical: ["뮤지컬/연극"],
  theater: ["뮤지컬/연극"],
  classic: ["클래식/무용"],
  dancing: ["클래식/무용"],
  exhibit: ["전시/행사"],
  event: ["전시/행사"],
  concert: ["콘서트"],
};
// 한국어 필터 이름을 영어 장르 배열로 변환하는 함수
const getGenresByFilter = (filter: string) => {
  if (filter.startsWith("전체")) {
    return Object.keys(genreToFilter);
  }

  return Object.entries(genreToFilter)
    .filter(([, filters]) => filters.includes(filter))
    .map(([genre]) => genre);
};

const Filters = ({ genres, handleGenreClick }: FiltersPropTypes) => {
  const genreCounts = genres.reduce<{ [key: string]: number }>((genreCount, genre) => {
    const filterNames = genreToFilter[genre];
    if (filterNames) {
      filterNames.forEach((filterName) => {
        genreCount[filterName] = (genreCount[filterName] || 0) + 1;
      });
    }
    return genreCount;
  }, {});

  const totalCount = genres.length;

  const filters = fixedFilters.map((filter) => {
    const count = filter.name === "전체" ? totalCount : genreCounts[filter.name] || 0;
    return `${filter.name}(${count})`;
  });

  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    const filterName = filter.slice(0, filter.indexOf("("));
    const clickedGenres = getGenresByFilter(filterName);
    handleGenreClick(clickedGenres);
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
          const isActive = activeFilter.slice(0, 2) === filter.slice(0, 2);
          return (
            <S.FilterBtn key={i} $isActive={isActive} onClick={() => handleFilterClick(filter)}>
              {filter}
            </S.FilterBtn>
          );
        })}
      </S.FiltersWrapper>
      <S.FilterResultAndSort>
        <S.FilterResult>총 {totalCount}개의 검색 결과가 나왔습니다.</S.FilterResult>
        <S.SortBox>
          <S.SelectSortWrapper onClick={toggleDropdown}>
            <S.SelectedSort>{selectedOption}</S.SelectedSort>
            <S.DropdownBtn>
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
