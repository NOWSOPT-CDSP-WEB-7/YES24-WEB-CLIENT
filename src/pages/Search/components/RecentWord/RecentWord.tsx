import * as S from "./RecentWord.styled";
import { IcCancel } from "../../../../assets/icons";
const RecentWord = ({ word }) => {
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
