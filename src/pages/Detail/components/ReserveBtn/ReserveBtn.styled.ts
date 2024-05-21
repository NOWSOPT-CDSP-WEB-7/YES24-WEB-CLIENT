import styled from "styled-components";

export const BtnWrapper = styled.section`
  position: fixed;
  bottom: 0;
  width: 37.5rem;
  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.colors.UI_background};
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.2rem;

  color: ${({ theme }) => theme.colors.UI_background};

  background-color: ${({ theme }) => theme.colors.Secondary_orange};
  border-radius: 0.2rem;
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;
