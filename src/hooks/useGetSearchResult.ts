import axios from "axios";
import { useEffect, useState } from "react";

interface extractedDataPropTypes {
  title: string;
  location: string;
}
interface searchResultPropTypes extends extractedDataPropTypes {
  id: number;
  period: string;
  place: string;
  genre: string;
  image: string;
}

const useGetSearchResult = () => {
  const [searchResult, setSearchResult] = useState<searchResultPropTypes[]>([]);
  const [extractedData, setExtractedData] = useState<extractedDataPropTypes[]>([]);

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
    const data = searchResult.map((item) => ({
      title: item.title,
      location: item.location,
    }));
    setExtractedData(data);
  }, [searchResult]);

  return { searchResult, extractedData, getSearchResult };
};

export default useGetSearchResult;
