import useGetSearchResult from "../../../../hooks/useGetSearchResult.ts";
import * as S from "./SearchList.styled.ts";
import showImg from "../../../../assets/images/show.png";
import { useState } from "react";

const SearchList = ({ input }) => {
  const { searchResult } = useGetSearchResult();
  const filteredResult = searchResult.filter(
    (item) =>
      item.title.toLowerCase().includes(input.toLowerCase()) ||
      item.location.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <S.SearchListWrapper>
      {filteredResult.map((item, i) => (
        <S.SearchLi key={item.id}>
          <S.LiImg src={showImg} alt="showimg" />
          <S.LiTextBox>
            <S.LiLocation>{`[${item.location}] `}</S.LiLocation>
            <S.LiTitle>{item.title}</S.LiTitle>
          </S.LiTextBox>
        </S.SearchLi>
      ))}
    </S.SearchListWrapper>
  );
};

export default SearchList;
