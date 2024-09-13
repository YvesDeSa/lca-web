import React from 'react';
import {
    LoginContainer,
    LoginBox,
    Logo,
    Title
} from './style';

import Input from '../../components/input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Logo>
          <img src="/logo.png" alt="Logo" />
        </Logo>
        <Title>Login</Title>
        <Input type="text" placeholder="Username" icon="👤" />
        <Input type="password" placeholder="Password" icon="🔒" />
        <Button text="Sign in" />
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
