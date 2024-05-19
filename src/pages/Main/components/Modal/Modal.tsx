import { IcCheckbox } from "@assets/icons";
import banner1 from "@assets/modalImgs/modal_banner1.png";
import banner2 from "@assets/modalImgs/modal_banner2.png";
import * as S from "./Modal.styled";

const Modal = () => {
  const dialog = document.querySelector("dialog");
  dialog?.showModal();

  const handleClickClose = () => {
    dialog?.close();
    console.log("클릭은 된다.");
  };

  return (
    <S.ModalWrapper id="dialog">
      <S.ModalBanner>
        <img src={banner1} />
        <img src={banner2} />
      </S.ModalBanner>
      <S.MdoalBottomText>
        <S.MdoalBottomTextLeft>
          <IcCheckbox />
          오늘은 그만 보기
        </S.MdoalBottomTextLeft>
        <S.MdoalBottomTextRight onClick={handleClickClose}>닫기</S.MdoalBottomTextRight>
      </S.MdoalBottomText>
    </S.ModalWrapper>
  );
};

export default Modal;
