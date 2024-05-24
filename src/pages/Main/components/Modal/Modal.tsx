import { IcCheckbox } from "@assets/icons";
import banner1 from "@assets/modalImgs/modal_banner1.png";
import banner2 from "@assets/modalImgs/modal_banner2.png";
import { useEffect, useRef } from "react";
import * as S from "./Modal.styled";

interface ModalPropTypes {
  isOpen: boolean;
  setShowModal: (prop: boolean) => void;
}

const Modal = ({ isOpen, setShowModal }: ModalPropTypes) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
      document.body.style.height = "72rem";
    }
  }, [isOpen]);

  const handleClickClose = () => {
    dialog.current?.close();
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    setShowModal(false);
  };

  return (
    <S.ModalWrapper ref={dialog}>
      <S.ModalBanner>
        <img src={banner1} width={"335px"} height={"78px"} />
        <img src={banner2} width={"335px"} height={"239px"} />
      </S.ModalBanner>
      <S.ModalBottomText>
        <S.ModalBottomTextLeft>
          <IcCheckbox />
          오늘은 그만 보기
        </S.ModalBottomTextLeft>
        <S.ModalBottomTextRight onClick={handleClickClose}>닫기</S.ModalBottomTextRight>
      </S.ModalBottomText>
    </S.ModalWrapper>
  );
};

export default Modal;
