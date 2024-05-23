import * as S from "./SearchedShow.styled";
import showImg from "../../../assets/images/show.png";
import { useNavigate } from "react-router-dom";

interface SearchResultPropTypes {
  id: number;
  title: string;
  period: string;
  location: string;
  place: string;
  genre: string;
  image: string;
}

const SearchedShow = ({ show }: { show: SearchResultPropTypes }) => {
  const { id, title, image, location, period, place } = show;
  const navigate = useNavigate();

  const handleShowClick = () => {
    const recentShows = localStorage.getItem("recentShows");
    let recentShowsList = recentShows ? JSON.parse(recentShows) : [];

    recentShowsList = recentShowsList.filter((item: SearchResultPropTypes) => item.id !== id);

    recentShowsList.unshift(show);

    localStorage.setItem("recentShows", JSON.stringify(recentShowsList));
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <S.ShowWrapper onClick={handleShowClick}>
        <S.ShowImg src={image} />
        <S.ShowRightSec>
          <S.ShowStatusBtns>
            <S.StatusBtn color={"Text_01"} backcolor={"UI_02"}>
              예매마감
            </S.StatusBtn>
            <S.StatusBtn color={"UI_background"} backcolor={"Tertiary_red"}>
              예매중
            </S.StatusBtn>
            <S.StatusBtn color={"UI_background"} backcolor={"Sub_purple"}>
              단독
            </S.StatusBtn>
          </S.ShowStatusBtns>
          <S.Title>{`[${location}] ${title}`}</S.Title>
          <S.PeriodAndPlace>
            <S.Period>{period}</S.Period>
            <S.Place>{place}</S.Place>
          </S.PeriodAndPlace>
        </S.ShowRightSec>
      </S.ShowWrapper>
    </>
  );
};

export default SearchedShow;
