import * as S from "./RecentWords.styled";
import { useState } from "react";
import RecentWord from "../RecentWord/RecentWord";

const RecentWords = () => {
  const words = ["레베카", "울산", "서울"];
  if (words.length === 0) {
    return <div>최근 검색어가 없습니다.</div>;
  }
  return (
    <S.Wrapper>
      {words && (
        <div>
          {words.map((word, i) => {
            return <RecentWord key={i} word={word} />;
          })}
        </div>
      )}
    </S.Wrapper>
  );
};

export default RecentWords;
