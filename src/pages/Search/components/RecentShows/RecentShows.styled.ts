import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const NoRecentShows = styled.span`
  margin-top: 4.4rem;

  color: ${({ theme }) => theme.colors.Text_02};
  text-align: center;
  ${({ theme }) => theme.fonts.sub_14pt};
`;
