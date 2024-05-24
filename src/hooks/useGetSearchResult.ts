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

const useGetSearchResult = (input: string) => {
  const [searchResult, setSearchResult] = useState<searchResultPropTypes[]>([]);

  const getSearchResult = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}runshow/search?query=${input}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, [input]);

  return { searchResult, getSearchResult };
};

export default useGetSearchResult;
