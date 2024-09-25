import React from 'react';
import { StyledButton } from './style';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface ButtonProps {
  text: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, loading = false, type = "button" }) => {
  return (
    <StyledButton type={type} disabled={loading}>
      {loading ? <AiOutlineLoading3Quarters className="spinner" /> : text}
    </StyledButton>
  );
};

export default Button;
