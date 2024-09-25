import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 15px;
    padding-left: 45px;
    border: 1px solid  ${({ theme }) => theme.colors.secondary};
    border-radius: 20px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.8;
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.4; 
    }

    @media (min-width: 768px) {
      padding: 15px;
      padding-left: 50px;
    }
  }

  .icon {
    position: absolute;
    left: 20px;
    top: 52%;
    transform: translateY(-50%);
    font-size: 20px;
    color:  ${({ theme }) => theme.colors.secondary};
    opacity: 0.6;
  }
`;
