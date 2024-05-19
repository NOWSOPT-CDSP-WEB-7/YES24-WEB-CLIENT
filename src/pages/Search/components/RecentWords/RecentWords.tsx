import * as S from "./RecentWords.styled";
import useGetRecentSearch from "../../../../hooks/useGetRecentSearch";
import { useEffect, useState } from "react";

const RecentWords = () => {
  const { getRecentSearch } = useGetRecentSearch();
  const [words, setWords] = useState([]);
  useEffect(() => {
    const getWords = getRecentSearch();
    setWords(getWords);
  }, []);
  console.log(words);
  return <div>RecentWords</div>;
};

export default RecentWords;
