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
  const handleDeleteWord = (word: string) => {
    const updatedWords = words.filter((w) => w !== word);
    localStorage.setItem("recentWordsList", JSON.stringify(updatedWords));
    setWords(updatedWords);
  };
  return (
    <>
      <S.Wrapper>
        {words && (
          <div>
            {words.map((word, i) => {
              return <RecentWord key={i} word={word} onDelete={handleDeleteWord} />;
            })}
          </div>
        )}
      </S.Wrapper>
      <DeleteAllBtn handleDelete={handleDeleteAll} />
    </>
  );
};

export default RecentWords;
