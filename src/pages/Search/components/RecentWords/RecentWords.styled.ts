import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
`;
export const NoRecentWords = styled.span`
  margin-top: 4.4rem;

  color: ${({ theme }) => theme.colors.Text_02};
  text-align: center;

  ${({ theme }) => theme.fonts.sub_14pt};
`;
