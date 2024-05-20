import styled from "styled-components";

export const InfoWrapper = styled.section`
  padding: 1.8rem 0 0 4.3rem;
`;

export const TimeTitle = styled.h2`
  padding: 2rem 1rem;
  ${({ theme }) => theme.fonts.title_15pt_Bold};
`;

export const Time = styled.span`
  white-space: pre-line;
`;

export const NoticeTitle = styled.h3`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const NoticeTime = styled.span``;

export const ShowImg = styled.img``;
