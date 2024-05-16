import axios from "axios";
import { useEffect, useState } from "react";

interface searchResultPropTypes {
  title: string;
  location: string;
  image: string;
  id: number;
  period: string;
  place: string;
  genre: string;
}

const useGetSearchResult = () => {
  const [searchResult, setSearchResult] = useState<searchResultPropTypes[]>([]);

  const getSearchResult = async () => {
    try {
      const response = await axios.get("/data/search-result.json", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return { searchResult, getSearchResult };
};

export default useGetSearchResult;
