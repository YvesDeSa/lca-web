import React from 'react';
import { InputContainer } from './style'

interface InputProps {
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ type, placeholder, icon }) => (
  <InputContainer>
    <span>{icon}</span>
    <input type={type} placeholder={placeholder} />
  </InputContainer>
);

export default Input;
