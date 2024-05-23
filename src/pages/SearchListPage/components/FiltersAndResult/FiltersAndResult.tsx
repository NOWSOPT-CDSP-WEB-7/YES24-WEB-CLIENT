import { getSearchResult } from "@apis/SearchApi/getSearchResult";
import FilteredResultList from "../FilteredResultList/FilteredResultList";
import Filters from "../Filters/Filters";
import { useEffect, useState } from "react";

interface SearchResultPropTypes {
  id: number;
  title: string;
  period: string;
  location: string;
  place: string;
  genre: string;
  image: string;
}

const FiltersAndResult = () => {
  const [searchResult, setSearchResult] = useState<SearchResultPropTypes[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [searchWord, setSearchWord] = useState<string | null>(null);

  useEffect(() => {
    const storedSearchWord = localStorage.getItem("searchWord");
    if (storedSearchWord) {
      setSearchWord(storedSearchWord);
    }
  }, []);

  useEffect(() => {
    if (searchWord) {
      fetchSearchResults(searchWord);
    }
  }, [searchWord]);
  const fetchSearchResults = async (word: string) => {
    const result = await getSearchResult(word);
    setSearchResult(result);

    const extractedGenres = result.map((item) => item.genre);
    setGenres(extractedGenres);
  };
  return (
    <>
      <Filters genres={genres} />
      <FilteredResultList searchResult={searchResult} />
    </>
  );
};

export default FiltersAndResult;
