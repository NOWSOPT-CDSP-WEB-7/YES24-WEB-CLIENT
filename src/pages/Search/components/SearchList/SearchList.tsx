import useGetSearchResult from "../../../../hooks/useGetSearchResult.ts";
import * as S from "./SearchList.styled.ts";

const SearchList = ({ input }) => {
  const { searchResult } = useGetSearchResult();
  const filteredResult = searchResult.filter(
    (item) =>
      item.title.toLowerCase().includes(input.toLowerCase()) ||
      item.location.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <S.SearchListWrapper>
      {filteredResult.map((item, i) => (
        <S.SearchLi key={item.id}>
          <S.LiImg src={item.image} />
          <S.LiTitle>{item.title}</S.LiTitle>
        </S.SearchLi>
      ))}
    </S.SearchListWrapper>
  );
};

export default SearchList;
