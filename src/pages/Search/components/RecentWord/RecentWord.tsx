import * as S from "./RecentWord.styled";
import { IcCancel } from "../../../../assets/icons";

interface WordPropTypes {
  word: string;
  onDelete: (word: string) => void;
}

const RecentWord = ({ word, onDelete }: WordPropTypes) => {
  const handleWordDelete = () => {
    onDelete(word);
  };
  return (
    <S.WordWrapper>
      <S.Word>{word}</S.Word>
      <S.CancelBtn onClick={handleWordDelete}>
        <IcCancel />
      </S.CancelBtn>
    </S.WordWrapper>
  );
};

export default RecentWord;
