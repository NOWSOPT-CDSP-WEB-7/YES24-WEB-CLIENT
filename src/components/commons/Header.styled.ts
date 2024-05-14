import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.UI_background};
`;

export const BtnLayout = styled.section`
  display: flex;
  margin-left: auto;
`;

export const SearchBtn = styled.button`
  display: flex;
`;

export const MyBtn = styled.button``;

export const HamburgerBtn = styled.button``;
