import styled from "styled-components";

export const TicketWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const TicketHeader = styled.header`
  display: flex;
  width: 37.5rem;
  height: 4.5rem;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentList = styled.article`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  width: 35.5rem;
  padding: 1rem 0;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.UI_02};
`;

export const ListImg = styled.div<{ imgsrc: string }>`
  flex-shrink: 0;
  width: 6.4rem;
  height: 9rem;

  background: url(${({ imgsrc }) => imgsrc});
  border-radius: 0.4rem;
`;

export const ListTextBox = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

export const ListTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const ListTextPeriodPlace = styled.span`
  color: ${({ theme }) => theme.colors.Primary_orange};
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const BottomButton = styled.button`
  display: flex;
  width: 35.5rem;
  padding: 1rem 0.8rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.UI_02};
  background: ${({ theme }) => theme.colors.UI_background};

  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;
