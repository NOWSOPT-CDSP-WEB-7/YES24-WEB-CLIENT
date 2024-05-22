import * as S from "./RecentWord.styled";
import { IcCancel } from "../../../../assets/icons";

interface WordPropTypes {
  word: string;
}

const RecentWord = ({ word }: WordPropTypes) => {
  return (
    <S.WordWrapper>
      <S.Word>{word}</S.Word>
      <S.CancelBtn>
        <IcCancel />
      </S.CancelBtn>
    </S.WordWrapper>
  );
};

export default RecentWord;
