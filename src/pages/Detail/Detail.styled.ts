import styled from "styled-components";

export const DetailWrapper = styled.section``;

export const ShowLayout = styled.section`
  padding: 1rem;
`;

export const Title = styled.h1`
  padding: 0 1rem;
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const ShowEntireInfoLayout = styled.section`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const ShowImage = styled.img``;

export const ShowInfoContainer = styled.section`
  display: flex;
  gap: 1rem;
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
