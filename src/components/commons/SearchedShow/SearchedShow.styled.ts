import styled from "styled-components";
interface StatusBtnPropTypes {
  color: string;
  backcolor: string;
}

export const ShowWrapper = styled.article`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 1rem;

  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.UI_02};
`;
export const ShowImg = styled.img`
  width: 9.8rem;
  height: 12rem;
`;
export const ShowRightSec = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 24rem;
`;
export const ShowStatusBtns = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-start;
`;
export const StatusBtn = styled.button<StatusBtnPropTypes>`
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.4rem;

  color: ${({ theme, color }) => theme.colors[color]};

  background-color: ${({ theme, backcolor }) => theme.colors[backcolor]};
  ${({ theme }) => theme.fonts.sub_10pt};
  border-radius: 2px;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_18pt};
`;
export const PeriodAndPlace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Period = styled.span`
  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_12pt};
`;
export const Place = styled.span`
  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_12pt};
`;
