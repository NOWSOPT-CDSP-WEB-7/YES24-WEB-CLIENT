import * as S from "./DeleteAllBtn.styled";

interface DeleteAllPropTypes {
  handleDelete: () => void;
}
const DeleteAllBtn = ({ handleDelete }: DeleteAllPropTypes) => {
  return (
    <S.BtnContainer onClick={handleDelete}>
      <S.DeleteBtn>전체삭제</S.DeleteBtn>
    </S.BtnContainer>
  );
};

export default DeleteAllBtn;
