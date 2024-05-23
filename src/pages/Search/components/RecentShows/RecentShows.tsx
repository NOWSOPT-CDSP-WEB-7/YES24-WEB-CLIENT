import DeleteAllBtn from "@components/commons/DeleteAllBtn/DeleteAllBtn";
import SearchedShow from "../../../../components/commons/SearchedShow/SearchedShow";
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

const RecentShows = () => {
  const [recentShows, setRecentShows] = useState<SearchResultPropTypes[]>([]);
  useEffect(() => {
    const recentShowsArr = localStorage.getItem("recentShows");
    if (recentShowsArr) {
      setRecentShows(JSON.parse(recentShowsArr));
    } else {
      localStorage.setItem("recentShows", JSON.stringify([]));
    }
  }, []);

  const handleDeleteAll = () => {
    localStorage.removeItem("recentShows");
    setRecentShows([]);
  };
  if (recentShows.length === 0) {
    return <div>최근 검색 공연이 없습니다</div>;
  }
  console.log(recentShows);
  return (
    <>
      {recentShows.length !== 0 &&
        recentShows.map((recentShow) => <SearchedShow show={recentShow} key={recentShow.id} />)}

      <DeleteAllBtn handleDelete={handleDeleteAll} />
    </>
  );
};

export default RecentShows;
