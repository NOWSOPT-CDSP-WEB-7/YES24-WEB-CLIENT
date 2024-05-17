import styled from "styled-components";

export const RankingWrapper = styled.div`
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: center;
`;

export const RankingHeader = styled.div`
  display: flex;
  width: 37.5rem;
  height: 4.5rem;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.Text_strong};
  ${({ theme }) => theme.fonts.title_18pt_Bold};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContentTab = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 0rem 1rem;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.UI_03};
`;

export const TabUnit = styled.div<{ $isSelected?: boolean }>`
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

export const SwiperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const SwiperCardImg = styled.div<{ imgsrc: string }>`
  display: flex;
  width: 15rem;
  height: 19rem;
  padding-top: 9.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-radius: 0.4rem;
  background-image: url(${({ imgsrc }) => imgsrc});
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
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.49) 57.38%,
      rgba(0, 0, 0, 0.7) 100%
    )
  );

  color: ${({ theme }) => theme.colors.UI_background};
  ${({ theme }) => theme.fonts.title_26pt_Bold};
`;

export const SwiperCardContents = styled.div`
  display: flex;
  height: 6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const SwiperCardTitle = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.Text_strong};

  /*이거 디자인 선생님이 정의해두지 않은 스타일이라 직접 작성 */
  /*디자인 선생님한테 연락해서 추가 요청 드리기! */
  font-family: "Apple SD Gothic Neo";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: 120%; /* 16.8px */

  /*위치 조정의 편의를 위해, 한줄 넘어갈 경우 ... 처리 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
