import useGetSearchResult from "../../../../hooks/useGetSearchResult.ts";
import * as S from "./SearchList.styled.ts";
import showImg from "../../../../assets/images/show.png";

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
          <S.LiImg src={showImg} alt="showimg" />
          <S.LiTextBox>
            <S.LiLocation
              $isMatched={item.location.toLowerCase().includes(input.toLowerCase())}
            >{`[${item.location}] `}</S.LiLocation>
            <S.LiTitle $isMatched={item.title.toLowerCase().includes(input.toLowerCase())}>
              {item.title}
            </S.LiTitle>
          </S.LiTextBox>
        </S.SearchLi>
      ))}
    </S.SearchListWrapper>
  );
};

export default SearchList;
