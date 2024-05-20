import styled from "styled-components";

export const InfoWrapper = styled.section`
  padding: 1.8rem 1rem 4rem;
`;

export const TimeLayout = styled.section`
  padding: 2rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.UI_02};
  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;

export const TimeTitle = styled.h2`
  ${({ theme }) => theme.fonts.title_15pt_Bold};
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.Text_01};
  white-space: pre-line;
  ${({ theme }) => theme.fonts.sub_13pt_bold};
`;

export const NoticeLayout = styled.section`
  padding: 2rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;

export const NoticeTitle = styled.h3`
  padding: 0 0 0.8rem;
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const NoticeTime = styled.span`
  display: block;
  padding-bottom: 1rem;

  color: ${({ theme }) => theme.colors.Primary_orange};
  white-space: pre-line;
  ${({ theme }) => theme.fonts.sub_14pt};
`;

export const NoticeDetail = styled.span`
  color: ${({ theme }) => theme.colors.Text_01};
  white-space: pre-line;
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const ImgLayout = styled.section`
  padding: 1rem 0;
`;

export const ShowFirstImg = styled.img`
  width: 35.5rem;
  height: 41.6rem;
  padding-bottom: 1rem;
`;

export const ShowSecondImg = styled.img`
  width: 35.5rem;
  height: 101.1rem;
`;

export const BannerFirstImg = styled.img`
  width: 37.5rem;
  height: 4.8rem;
`;

export const BannerSecondImg = styled.img`
  width: 37.5rem;
  height: 6.6rem;
`;
