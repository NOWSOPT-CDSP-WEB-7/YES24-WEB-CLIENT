import styled from "styled-components";

export const RankingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const RankingHeader = styled.header`
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
  gap: 1rem;
  align-items: center;
`;

export const ContentTab = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 37.5rem;
  padding: 0 1rem;

  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.UI_03};
`;

export const TabUnit = styled.button<{ $isSelected?: boolean }>`
  display: flex;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex: 1 0 0;

  border-bottom: 0.2rem solid
    ${({ theme, $isSelected }) => ($isSelected ? theme.colors.Primary_orange : theme.colors.UI_03)};

  white-space: nowrap;
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.Primary_Black : theme.colors.Text_02};
`;

export const SwiperCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

export const SwiperCardImg = styled.div<{ imgsrc: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 15rem;
  height: 19rem;
  padding-top: 9.5rem;

  background-image: url(${({ imgsrc }) => imgsrc});
  border-radius: 0.4rem;
`;

export const SwiperCardImgGradation = styled.div`
  display: flex;
  width: 15rem;
  height: 9.5rem;

  border-radius: 0.4rem;
  padding: 1rem;
  align-items: flex-end;
  gap: 0.8rem;

  background: var(
    --black_gra,
    linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 49%) 57.38%, rgb(0 0 0 / 70%) 100%)
  );

  color: ${({ theme }) => theme.colors.UI_background};
  ${({ theme }) => theme.fonts.title_26pt_Bold};
`;

export const SwiperCardContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  height: 6rem;
`;

export const SwiperCardTitle = styled.span`
  align-self: stretch;

  /* 위치 조정의 편의를 위해, 한줄 넘어갈 경우 ... 처리 */
  overflow: hidden;

  color: ${({ theme }) => theme.colors.Text_strong};
  font-weight: 800;
  font-size: 1.4rem;

  /* 이거 디자인 선생님이 정의해두지 않은 스타일이라 직접 작성 */

  /* 디자인 선생님한테 연락해서 추가 요청 드리기! */
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  line-height: 120%; /* 16.8px */
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SwiperCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  color: ${({ theme }) => theme.colors.Text_02};
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
