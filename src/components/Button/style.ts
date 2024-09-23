import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: radial-gradient(50% 383.1% at 50% 50%, rgba(255, 246, 191, 0.5) 0%, rgba(154, 239, 148, 0.2) 100%);
  color: ${({theme})=> theme.colors.secondary};
  font-size: 16px;
  transition: background-image 0.6s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    padding: 15px;
  }
`;
