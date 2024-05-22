import styled from "styled-components";

export const EntireWrapper = styled.div``;

export const CategoryWrapper = styled.section`
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  gap: 0.8rem;
  width: 100%;
  padding: 1rem 1rem 0;

  background-color: ${({ theme }) => theme.colors.UI_background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.UI_03};
`;

export const Category = styled.article<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: -2px;
  padding: 0.8rem;

  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.Primary_Black : theme.colors.Text_02};

  border-bottom: 2px solid
    ${({ $isSelected, theme }) => ($isSelected ? theme.colors.Primary_orange : theme.colors.UI_03)};

  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;
