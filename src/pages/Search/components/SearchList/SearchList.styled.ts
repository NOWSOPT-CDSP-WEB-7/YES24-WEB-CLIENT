import styled from "styled-components";

export const SearchListWrapper = styled.section`
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100dvw;
  min-height: calc(100dvh - 10.5rem);

  background-color: ${({ theme }) => theme.colors.UI_background};
`;
export const SearchLi = styled.li`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;
export const LiImg = styled.img`
  width: 3rem;
  height: 3.4rem;
`;
export const LiTextBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
export const LiLocation = styled.span<{ $isMatched?: boolean }>`
  color: ${({ $isMatched, theme }) =>
    $isMatched ? theme.colors.Secondary_orange : theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_14pt};
  white-space: pre;
`;
export const LiTitle = styled.span<{ $isMatched?: boolean }>`
  color: ${({ $isMatched, theme }) =>
    $isMatched ? theme.colors.Secondary_orange : theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_14pt};
`;
export const SameText = styled.span<{ $matched?: boolean }>`
  color: ${({ $matched, theme }) =>
    $matched ? theme.colors.Secondary_orange : theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_14pt};
  white-space: pre;
`;
