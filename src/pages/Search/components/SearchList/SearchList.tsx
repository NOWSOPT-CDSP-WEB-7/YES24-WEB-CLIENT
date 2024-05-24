import { useNavigate } from "react-router-dom";
import useGetSearchResult from "../../../../hooks/useGetSearchResult.ts";
import * as S from "./SearchList.styled.ts";

interface InputPropTypes {
  input: string;
}

const SearchList = ({ input }: InputPropTypes) => {
  const { searchResult } = useGetSearchResult(input);
  const navigate = useNavigate();

  const highlightText = (text: string, searchInput: string) => {
    const regex = new RegExp(`(${searchInput})`, "gi");
    return text.split(regex).map((part, index) => (
      <S.SameText key={index} $matched={part.toLowerCase() === searchInput.toLowerCase()}>
        {part}
      </S.SameText>
    ));
  };

  const highlightLocation = (location: string, searchInput: string) => {
    return (
      <S.SameText $matched={location.toLowerCase().includes(searchInput.toLowerCase())}>
        {`[${location}] `}
      </S.SameText>
    );
  };

  const filteredResult = searchResult.filter(
    (item) =>
      item.title.toLowerCase().includes(input.toLowerCase()) ||
      item.location.toLowerCase().includes(input.toLowerCase())
  );
  const handleGoToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };
  return (
    <S.SearchListWrapper>
      {filteredResult.map((item) => (
        <S.SearchLi key={item.id} onClick={() => handleGoToDetail(item.id)}>
          <S.LiImg src={item.image} alt="showimg" />
          <S.LiTextBox>
            {highlightLocation(item.location, input)}
            <S.LiTitle>{highlightText(item.title, input)}</S.LiTitle>
          </S.LiTextBox>
        </S.SearchLi>
      ))}
    </S.SearchListWrapper>
  );
};

export default SearchList;
