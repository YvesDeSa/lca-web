import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: 768px) {
    padding: 15px;
  }
`;