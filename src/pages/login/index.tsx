import {
    LoginContainer,
    LoginBox,
    Logo,
    Title
} from './style';

import { LuUser2, LuLock } from "react-icons/lu";


import Input from '../../components/input';
import Button from '../../components/Button';
const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Logo>
          <img src="/img/logo-ifes.svg" alt="Logo" />
        </Logo>
        <Title>Login</Title>
        <Input 
      type="text" 
      placeholder="Username" 
      icon={LuUser2} 
      iconColor="#FFF6BF" 
    />

    <Input 
      type="password" 
      placeholder="Password" 
      icon={LuLock} 
      iconColor="#FFF6BF" 
    />
        <Button text="Sign in" />
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
