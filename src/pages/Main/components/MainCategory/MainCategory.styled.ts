import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 37.5rem;
  height: 6.8rem;
`;

export const CategoryCell = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  width: 12.5rem;
  height: 3.4rem;

  color: ${({ theme }) => theme.colors.Text_01};

  background: var(--UI-UI_background, #fff);
  border: 1px solid ${({ theme }) => theme.colors.UI_01};

  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;
