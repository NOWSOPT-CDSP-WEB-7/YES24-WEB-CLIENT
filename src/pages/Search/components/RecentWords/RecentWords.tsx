import * as S from "./RecentWords.styled";
import RecentWord from "../RecentWord/RecentWord";
import DeleteAllBtn from "@components/commons/DeleteAllBtn/DeleteAllBtn";

const RecentWords = () => {
  const words: string[] = ["레베카", "울산", "서울"];
  if (words.length === 0) {
    return <div>최근 검색어가 없습니다.</div>;
  }
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
      <DeleteAllBtn />
    </>
  );
};

export default RecentWords;
