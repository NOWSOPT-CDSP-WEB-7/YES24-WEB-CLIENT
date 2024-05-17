import styled from "styled-components";

export const RankingWrapper = styled.div`
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: center;
`;

export const RankingHeader = styled.div`
  display: flex;
  width: 37.5rem;
  height: 4.5rem;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContentTab = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 0rem 1rem;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.UI_03};
`;

export const TabUnit = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex: 1 0 0;

  border-bottom: 0.2rem solid
    ${({ theme, $isSelected }) => ($isSelected ? theme.colors.Primary_orange : theme.colors.UI_03)};

  white-space: nowrap;
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.Primary_Black : theme.colors.Text_02};
`;
