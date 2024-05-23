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
export const FilterResultAndSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;
export const FilterResult = styled.span`
  color: ${({ theme }) => theme.colors.Primary_Black};
  ${({ theme }) => theme.fonts.sub_12pt};
`;
export const SortBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.Text_01};

  border: none;
`;
export const SelectSortWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;
export const SelectedSort = styled.span`
  padding: 0.5rem;

  color: ${({ theme }) => theme.colors.Text_01};

  ${({ theme }) => theme.fonts.sub_12pt};
  cursor: pointer;
`;
export const DropdownBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;
export const SortList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors.UI_background};
  border: 1px solid ${({ theme }) => theme.colors.UI_02};
  border-radius: 2px;
`;
export const SortItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.4rem;

  color: ${({ theme }) => theme.colors.Text_01};
  white-space: nowrap;

  ${({ theme }) => theme.fonts.dropdown_11pt};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.Secondary_orange};
    ${({ theme }) => theme.fonts.dropdown_11pt_bold};
  }
`;
