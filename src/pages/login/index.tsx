import {
    LoginContainer,
    LoginBox,
    Logo,
    Title,
    CompaniesBox,
    Company
} from './style';

import { LuUser2, LuLock } from "react-icons/lu";

import Input from '../../components/input';
import Button from '../../components/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/toast';

import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const Login = () => {
  const { addToast } = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      
      const response = await axios.post('http://localhost:8000/accounts/auth', {
        username,
        password
      });
  
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
  
      const decodedToken = jwtDecode(token);
      console.log(decodedToken)

      navigation('/dashboard');
      
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Login error',
        description: 'Invalid credentials or server error.',
      });
    } finally {
      setLoading(false);
    }
  };
  
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
      <CompaniesBox>
        <Company>
          <img src="img/company1.svg" alt="" />
        </Company>
      </CompaniesBox>
    </LoginContainer>
  );
};

export default Login;