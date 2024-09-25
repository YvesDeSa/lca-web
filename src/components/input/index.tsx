import React, { InputHTMLAttributes } from 'react';
import { InputContainer } from './style';
import { IconType } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: string;
  placeholder: string;
  icon?: IconType; 
  iconColor?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, icon: Icon , ...rest}) => (
  <InputContainer>
    {Icon && <span className="icon"><Icon /></span>}
    <input type={type} placeholder={placeholder} {...rest} />
  </InputContainer>
);

export default Input;
