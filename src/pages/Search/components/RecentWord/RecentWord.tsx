import * as S from "./RecentWord.styled";
import { IcCancel } from "../../../../assets/icons";
import { useNavigate } from "react-router-dom";

interface WordPropTypes {
  word: string;
  onDelete: (word: string) => void;
}

const RecentWord = ({ word, onDelete }: WordPropTypes) => {
  const navigate = useNavigate();
  const handleWordDelete = () => {
    onDelete(word);
  };

  const handleRecentWordClick = (recentWord: string) => {
    localStorage.setItem("searchWord", recentWord);
    navigate("list");
  };

  return (
    <S.WordWrapper onClick={() => handleRecentWordClick(word)}>
      <S.Word>{word}</S.Word>
      <S.CancelBtn onClick={handleWordDelete}>
        <IcCancel />
      </S.CancelBtn>
    </S.WordWrapper>
  );
};

export default RecentWord;
