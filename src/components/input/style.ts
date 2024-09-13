import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    padding-left: 40px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 16px;
    outline: none;

    @media (min-width: 768px) {
      padding: 15px;
    }
  }

  span {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
  }
`;
