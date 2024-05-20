import styled from "styled-components";

export const FiltersWrapper = styled.header`
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  padding: 0 1rem;
  overflow-x: auto;

  white-space: nowrap;
`;
export const FilterBtn = styled.button<{ $isActive: boolean }>`
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.6rem 1rem;

  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.Primary_orange : theme.colors.Text_01};

  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.Primary_orange : theme.colors.UI_03)};
  border-radius: 2px;

  ${({ theme }) => theme.fonts.sub_12pt};
`;
