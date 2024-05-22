import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 0 1rem;
`;

export const NoticeLayout = styled.section`
  padding: 2rem 0;
`;

export const Notice = styled.h3`
  padding-bottom: 0.8rem;
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const HighLight = styled.div`
  color: ${({ theme }) => theme.colors.Tertiary_red};
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const NoticeContent = styled.div`
  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const BtnLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.UI_02};
`;

export const WriteBtn = styled.button`
  width: 100%;
  padding: 1.2rem 1rem;

  color: ${({ theme }) => theme.colors.Text_03};

  ${({ theme }) => theme.fonts.sub_14pt};
  background-color: ${({ theme }) => theme.colors.Primary_Black};
`;

export const CommentLayout = styled.section``;

export const CategoryBox = styled.section`
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
`;

export const Category = styled.span<{ $isActive: boolean }>`
  padding: 1rem 0;

  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.Text_strong : theme.colors.Text_02)};

  ${({ theme }) => theme.fonts.sub_11pt};
  cursor: pointer;
`;

export const CommentBox = styled.article`
  padding: 1rem;

  border-top: 1px solid ${({ theme }) => theme.colors.UI_02};
`;

export const ContentWithBtn = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CommentContent = styled.span`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const CommentInfoBox = styled.section`
  display: flex;
  gap: 0.5rem;
`;

export const CommentInfo = styled.span`
  padding: 0.8rem 0;

  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_11pt};
`;

export const CommentDate = styled.div`
  color: ${({ theme }) => theme.colors.Text_02};
`;

export const ReportBtn = styled.button`
  display: flex;

  color: ${({ theme }) => theme.colors.Text_01};
  white-space: nowrap;

  ${({ theme }) => theme.fonts.sub_11pt};
  cursor: pointer;
`;

export const BtnBox = styled.section`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors.UI_02};
`;

export const MoreBtn = styled.button`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const BannerFirst = styled.img`
  width: 37.5rem;
  height: 7rem;

  cursor: pointer;
  display: block;
`;

export const BannerSecond = styled.img`
  width: 37.5rem;
  height: 5.1rem;

  cursor: pointer;
  display: block;
`;
