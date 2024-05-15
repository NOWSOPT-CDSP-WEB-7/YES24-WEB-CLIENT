import styled from "styled-components";

export const SearchBarContainer = styled.section`
  padding: 0.8rem 1rem;
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.UI_01};
  border: 1px solid ${({ theme }) => theme.colors.UI_02};
  border-radius: 5px;
`;
export const SearchBarInput = styled.input`
  width: 100%;
  height: 2rem;

  color: ${({ theme }) => theme.colors.Text_strong};

  background-color: ${({ theme }) => theme.colors.UI_01};
  caret-color: ${({ theme }) => theme.colors.Secondary_orange};

  ::placeholder {
    ${({ theme }) => theme.colors.Text_02};
  }
`;
export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
`;
