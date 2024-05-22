import * as S from "./RecentWords.styled";
import RecentWord from "../RecentWord/RecentWord";
import DeleteAllBtn from "@components/commons/DeleteAllBtn/DeleteAllBtn";
import { useEffect, useState } from "react";

const RecentWords = () => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    getRecentWordsList();
  }, []);
  const getRecentWordsList = () => {
    const recentWordsList = localStorage.getItem("recentWordsList");
    if (recentWordsList) {
      const parsedWords = JSON.parse(recentWordsList);
      setWords(parsedWords);
    }
  };
  if (words.length === 0) {
    return <S.NoRecentWords>최근 검색어가 없습니다</S.NoRecentWords>;
  }
  const handleDeleteAll = () => {
    localStorage.removeItem("recentWordsList");
    setWords([]);
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
