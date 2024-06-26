import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37.5rem;
  padding: 0.5rem 0 0.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.UI_background};
  transform: translate(-50%, 0);
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_03};
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
`;

export const BtnLayout = styled.section`
  display: flex;
  margin-left: auto;
`;

export const SearchBtn = styled.button`
  display: flex;
  padding: 0;
`;

export const MyBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
`;

export const HamburgerBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;
