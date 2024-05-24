import styled from "styled-components";

export const CardListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.UI_03};
`;

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* text_gra */
  box-shadow: 0 0.1rem 0.1rem 0 rgb(0 0 0 / 15%);
  border-radius: 0.4rem;
`;

export const CardImg = styled.img`
  width: 35.5rem;
  height: 14.6rem;

  border-radius: 0.4rem;
`;

export const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 35.5rem;
  height: 8rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.UI_background};
  border-radius: 0.4rem;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
`;

export const CardSmallTitle = styled.div`
  color: ${({ theme }) => theme.colors.Text_02};

  ${({ theme }) => theme.fonts.sub_11pt};
`;

export const CardBigTitle = styled.div`
  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const CardSubTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CardSubTitleLeft = styled.div`
  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const CardSubLeftSpan = styled.span`
  color: ${({ theme }) => theme.colors.Tertiary_red};
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const Line = styled.div`
  width: 0.1rem;
  height: 0.8rem;

  background: ${({ theme }) => theme.colors.UI_03};
`;

export const CardSubTitleRight = styled.span`
  color: ${({ theme }) => theme.colors.Text_02};
  ${({ theme }) => theme.fonts.sub_11pt};
`;
