import styled from "styled-components";

export const ModalWrapper = styled.dialog`
  position: fixed;
  top: calc(100vh - 37.4rem);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 37.5rem;
  padding: 2rem;

  background: ${({ theme }) => theme.colors.UI_background};
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.UI_02};
  border-radius: 1rem 1rem 0 0;

  &::backdrop {
    position: fixed;

    background-color: rgb(0 0 0 / 60%);
  }

  &:focus {
    outline: none;
  }
`;

export const ModalBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const MdoalBottomText = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

export const MdoalBottomTextLeft = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_14pt};
`;

export const MdoalBottomTextRight = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;

  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.title_14pt_Bold};

  cursor: pointer;
`;
