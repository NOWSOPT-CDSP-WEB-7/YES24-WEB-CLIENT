import styled from "styled-components";

export const CategoryWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  padding: 0 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;

export const Category = styled.article<{ $isSelected: boolean }>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.8rem;

  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.Text_strong : theme.colors.Text_02};

  cursor: pointer;
  border-bottom: 2px solid
    ${({ $isSelected, theme }) => ($isSelected ? `${theme.colors.Primary_orange}` : "transparent")};
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;
