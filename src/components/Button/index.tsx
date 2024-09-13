import React from 'react';
import { StyledButton } from './style';

const Button: React.FC<{ text: string }> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
