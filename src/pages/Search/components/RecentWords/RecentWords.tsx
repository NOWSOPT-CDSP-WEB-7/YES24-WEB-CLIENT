import * as S from "./RecentWords.styled";
import RecentWord from "../RecentWord/RecentWord";
import DeleteAllBtn from "@components/commons/DeleteAllBtn/DeleteAllBtn";
import { useEffect, useState } from "react";

const RecentWords = () => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    const recentWordsList = localStorage.getItem("recentWordsList");
    if (recentWordsList) {
      const parsedWords = JSON.parse(recentWordsList);
      setWords(parsedWords);
    }
  }, []);
  if (words.length === 0) {
    return <div>최근 검색어가 없습니다.</div>;
  }
  const handleDeleteAll = () => {
    localStorage.removeItem("recentWordsList");
  };
  return (
    <>
      <S.Wrapper>
        {words && (
          <div>
            {words.map((word, i) => {
              return <RecentWord key={i} word={word} />;
            })}
          </div>
        )}
      </S.Wrapper>
      <DeleteAllBtn onClick={handleDeleteAll} />
    </>
  );
};

export default RecentWords;
