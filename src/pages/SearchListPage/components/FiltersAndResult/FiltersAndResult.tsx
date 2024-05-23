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
  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);

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

    const extractedGenres = result.map((item: SearchResultPropTypes) => item.genre);
    setGenres(extractedGenres);
  };

  const handleGenreClick = (clickedGenres: string[]) => {
    setFilteredGenres(clickedGenres);
  };

  const filteredResults =
    filteredGenres.length > 0
      ? searchResult.filter((result) => filteredGenres.includes(result.genre))
      : searchResult;

  return (
    <>
      <Filters genres={genres} handleGenreClick={handleGenreClick} />
      <FilteredResultList searchResult={filteredResults} />
    </>
  );
};

export default FiltersAndResult;
