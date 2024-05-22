import styled from "styled-components";

export const BtnContainer = styled.section`
  display: flex;
  justify-content: flex-end;
`;
export const DeleteBtn = styled.button`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.Text_02};
  ${({ theme }) => theme.fonts.sub_12pt};
`;
