import axios from "axios";
import { useEffect, useState } from "react";

interface searchResultPropTypes {
  id: number;
  title: string;
  period: string;
  location: string;
  place: string;
  genre: string;
  image: string;
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
    const extractedData = searchResult.map((item) => ({
      title: item.title,
      location: item.location,
    }));
  }, [searchResult]);

  return { searchResult, getSearchResult };
};

export default useGetSearchResult;
