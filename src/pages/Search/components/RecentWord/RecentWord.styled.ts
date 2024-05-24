import styled from "styled-components";

export const WordWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;
export const Word = styled.span`
  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.sub_14pt};
`;
export const CancelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.4rem;
  height: 3.4rem;
  padding: 0;
`;
