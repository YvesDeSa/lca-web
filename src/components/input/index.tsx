import React from 'react';
import { InputContainer } from './style';
import { IconType } from 'react-icons';

interface InputProps {
  type: string;
  placeholder: string;
  icon?: IconType; 
  iconColor?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, icon: Icon }) => (
  <InputContainer>
    {Icon && <span className="icon"><Icon /></span>}
    <input type={type} placeholder={placeholder} />
  </InputContainer>
);

export default Input;
