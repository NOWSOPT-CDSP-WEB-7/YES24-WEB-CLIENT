import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  margin: 0.55rem 0;
`;
export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0.9rem;
`;

export const HamburgerBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0.9rem;
`;

export const SearchText = styled.h1`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_18pt};
`;
