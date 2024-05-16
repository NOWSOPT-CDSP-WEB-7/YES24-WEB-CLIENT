import styled from "styled-components";

export const SwiperCard = styled.div<{ imgsrc: string }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-end;
  width: 34rem;
  height: 100%;

  background-image: url(${(props) => props.imgsrc});
  border-radius: 0.5rem;
`;

export const GradationBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-end;
  width: 34rem;
  height: 24rem;

  background: var(
    --black_gra,
    linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 49%) 57.38%, rgb(0 0 0 / 70%) 100%)
  );
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  justify-content: flex-end;
  width: 34rem;
  padding: 2rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const TitleAndSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 30rem;

  color: ${({ theme }) => theme.colors.UI_background};
  ${({ theme }) => theme.fonts.title_26pt_Bold};
`;

export const SubTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 30.5rem;

  color: ${({ theme }) => theme.colors.UI_background};

  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

export const PeriodAndPlace = styled.span`
  color: ${({ theme }) => theme.colors.UI_background};
  ${({ theme }) => theme.fonts.sub_14pt};
`;

export const Indicator = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: flex-start;
  padding: 0.4rem 1rem;

  background: var(--black_gra, rgb(0 0 0 / 40%));
  border-radius: 2rem;
`;

export const CurrentIndex = styled.span`
  color: ${({ theme }) => theme.colors.UI_background};
  ${({ theme }) => theme.fonts.sub_14pt};
`;

export const TotalIndex = styled.span`
  opacity: 0.4;
`;
