import SearchedShow from "@components/commons/SearchedShow/SearchedShow";
import * as S from "./FilteredResultList.styled";

interface SearchResultPropTypes {
  id: number;
  title: string;
  period: string;
  location: string;
  place: string;
  genre: string;
  image: string;
}
interface ResultListProps {
  searchResult: SearchResultPropTypes[];
}

const FilteredResultList = ({ searchResult }: ResultListProps) => {
  return (
    <S.ResultListWrapper>
      {searchResult.map((show) => (
        <SearchedShow show={show} key={show.id} />
      ))}
    </S.ResultListWrapper>
  );
};

export default FilteredResultList;
