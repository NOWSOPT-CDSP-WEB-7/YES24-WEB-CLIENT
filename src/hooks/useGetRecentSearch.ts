import { useState } from "react";

const useGetRecentSearch = () => {
  const [dermy, setDermy] = useState(["화랑", "준혁", "다은"]);
  const getRecentSearch = () => {
    localStorage.setItem("words", dermy);
    const value = localStorage.getItem("words");
    console.log(value);
    return value;
  };
  return { getRecentSearch };
};

export default useGetRecentSearch;
