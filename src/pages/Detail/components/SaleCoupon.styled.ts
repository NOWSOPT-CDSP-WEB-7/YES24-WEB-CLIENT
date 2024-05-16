import styled from "styled-components";

export const CouponWrapper = styled.section`
  display: flex;
  padding: 1rem 1rem 0;
`;

export const CouponLayout = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.Primary_orange};
  border-radius: 2px;
`;

export const AvailableCouponTxt = styled.span`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const AvailableCoupon = styled.span`
  color: ${({ theme }) => theme.colors.Primary_orange};
`;

export const DownloadBtn = styled.button`
  display: flex;
  gap: 0.2rem;
  margin-left: auto;
  padding: 0.8rem 2rem;
  ${({ theme }) => theme.fonts.dropdown_11pt_bold};

  color: ${({ theme }) => theme.colors.UI_background};

  background-color: ${({ theme }) => theme.colors.Primary_orange};
  border-radius: 2px;
`;
