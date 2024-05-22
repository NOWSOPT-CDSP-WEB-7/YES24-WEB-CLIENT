import * as S from "./DeleteAllBtn.styled";

interface DeleteAllPropTypes {
  onClick: () => void;
}

const DeleteAllBtn = ({ onClick }: DeleteAllPropTypes) => {
  return (
    <S.BtnContainer onClick={onClick}>
      <S.DeleteBtn>전체삭제</S.DeleteBtn>
    </S.BtnContainer>
  );
};

export default DeleteAllBtn;
