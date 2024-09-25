import {
    LoginContainer,
    LoginBox,
    Logo,
    Title
} from './style';

import { LuUser2, LuLock } from "react-icons/lu";

import Input from '../../components/input';
import Button from '../../components/Button';

import { useState } from 'react';
import { useToast } from '../../hooks/toast';
import axios from 'axios';

const Login = () => {
  const { addToast } = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({username, password})

    if (!username || !password) {
      addToast({
        type: 'error',
        title: 'Empty inputs',
        description: 'Fill in all the fields to continue.'
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post('https://sua-api.com/auth/login', {
        username,
        password
      });

      const { token } = response.data;
      localStorage.setItem('jwtToken', token);

      addToast({
        type: 'success',
        title: 'Login successful',
        description: 'You have been successfully authenticated!'
      });

    } catch (error) {
      addToast({
        type: 'error',
        title: 'Login error',
        description: 'Invalid credentials or server error.'
      });
    } finally {
      setLoading(false);
  }
}
  
  return (
    <LoginContainer>
      <LoginBox>
        <Logo>
          <img src="/img/logo-ifes.svg" alt="Logo" />
        </Logo>
        <Title>Login</Title>

        <form onSubmit={handleLogin}>
        <Input 
          type="text" 
          placeholder="Username" 
          icon={LuUser2} 
          iconColor="#FFF6BF" 
          onChange={(e) => setUsername(e.target.value)}
        />

          <Input 
            type="password" 
            placeholder="Password" 
            icon={LuLock} 
            iconColor="#FFF6BF" 
            onChange={(e) => setPassword(e.target.value)}
          />
        <Button text="Sign in" type="submit" loading={loading} />
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;