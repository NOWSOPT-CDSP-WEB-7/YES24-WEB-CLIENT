import styled from "styled-components";

export const ShowWrapper = styled.section`
  padding: 5.4rem 1rem 1rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const ShowEntireInfoLayout = styled.section`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;

export const ShowContentLayout = styled.section`
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
`;

export const ShowInfoContainer = styled.section`
  display: flex;
  gap: 1rem;
`;

export const InfoWithBtnLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ShowImage = styled.img`
  padding-bottom: 1.4rem;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Category = styled.span`
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Info = styled.span`
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const Place = styled.span`
  color: ${({ theme }) => theme.colors.Primary_orange};
  ${({ theme }) => theme.fonts.sub_12pt};
`;

export const BtnLayout = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
`;

export const HeartBtnBox = styled.button`
  display: flex;
  gap: 0.2rem;
  height: 2.4rem;
  padding: 0.5rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors.Gray_stroke};
  border-radius: 2px;
`;

export const HeartNum = styled.span`
  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_12pt_extraBold};
`;
