import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem 1rem;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const SubTitle = styled.h4`
  padding: 1rem 0;

  color: ${({ theme }) => theme.colors.Text_01};
  ${({ theme }) => theme.fonts.sub_12pt_bold};
`;

export const TableImg = styled.img`
  width: 35.5rem;
  height: 18rem;
  padding: 1rem 0;
  object-fit: cover;
`;

export const Banner = styled.img`
  width: 37.5rem;
  height: 7rem;
  display: block;
`;
