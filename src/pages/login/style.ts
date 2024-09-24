
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('img/3.svg') no-repeat center center;
  background-size: cover;
`;

export const LoginBox = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 60px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border: 2px solid rgba(255, 246, 191, 0.4);
`;

export const Logo = styled.div`
  margin-bottom: 20px;

  img {
    width: 50px;
    height: auto;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.6;
  margin-bottom: 20px;
`;
