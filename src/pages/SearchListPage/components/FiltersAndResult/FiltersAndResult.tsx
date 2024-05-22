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
  useEffect(() => {
    const searchWord = localStorage.getItem("searchWord");
    if (searchWord) {
      //   setInput(searchWord);
      fetchSearchResults(searchWord);
    }
  }, []);
  const fetchSearchResults = async (word: string) => {
    const result = await getSearchResult(word);
    setSearchResult(result);
  };
  return (
    <>
      <Filters />
      <FilteredResultList searchResult={searchResult} />
    </>
  );
};

export default FiltersAndResult;
