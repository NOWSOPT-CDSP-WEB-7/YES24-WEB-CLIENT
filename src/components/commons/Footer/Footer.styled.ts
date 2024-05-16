import styled from "styled-components";

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  background-color: ${({ theme }) => theme.colors.UI_03};
`;

export const NoticeLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Notice = styled.p`
  padding-right: 0.6rem;

  color: ${({ theme }) => theme.colors.Text_02};
  ${({ theme }) => theme.fonts.sub_12pt_bold};
`;

export const Version = styled.p`
  padding: 0 0.6rem;

  color: ${({ theme }) => theme.colors.Text_02};
  ${({ theme }) => theme.fonts.sub_12pt_bold};
`;

export const TopBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.6rem;
  padding: 0.4rem 0.6rem;

  color: ${({ theme }) => theme.colors.Text_02};

  background-color: ${({ theme }) => theme.colors.UI_background};
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const PrivacyNoticeLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const Privacy = styled.p`
  padding: 0 0.6rem;
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const Rule = styled.p`
  padding: 0 0.6rem;
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const AddressLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Address = styled.div`
  display: flex;
  padding: 0 0 1rem;

  color: ${({ theme }) => theme.colors.Text_02};
  white-space: pre-line;
  text-align: center;

  ${({ theme }) => theme.fonts.sub_10pt};
`;

export const BtnLayout = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
