
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/path-to-background-image') no-repeat center center;
  background-size: cover;
`;

export const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const Logo = styled.div`
  margin-bottom: 20px;

  img {
    width: 50px;
    height: auto;
  }
`;

export const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;
