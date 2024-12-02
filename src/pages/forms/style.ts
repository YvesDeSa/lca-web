import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  background-color: #2E2E2E;
  padding: 24px;
  min-height: 100vh;
`;

// Estilo para o container do input (sem o efeito flutuante)
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espaço entre o rótulo e o input */
`;
export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas para os inputs */
  gap: 20px; /* Espaço entre os campos */
  padding: 20px;
  max-width: 70%; /* Largura máxima do formulário */
  margin: 0 auto;
`;

// Contêiner para os inputs compartilhando a mesma coluna
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaço entre os inputs internos */
  width: 100%; /* Garante que o wrapper ocupe toda a largura disponível */
  grid-column: span 1; /* Agora o InputWrapper vai ocupar apenas uma coluna da grid */
  position: relative; /* Para permitir o posicionamento absoluto do input Unit */
`;

// Estilo para o input "Production of the Stone"
export const MainInput = styled.input`
  padding: 12px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: transparent;
  color: #333;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%; /* O "Production of the Stone" ocupa a largura disponível */

  &:focus {
    border-color: #4CAF50;
  }

  &:hover {
    border-color: #888;
  }
`;

// Estilo para o input "Unit" que fica dentro de "Production of the Stone"
export const InnerInput = styled.input`
  position: absolute; /* Posiciona o input dentro do primeiro */
  top: 70%; /* Alinha verticalmente ao meio do input principal */
  right: 0; /* Fixa o input no final do "Production of the Stone" */
  transform: translateY(-50%); /* Ajuste fino para centralizar verticalmente */
  padding: 12px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: transparent;
  color: #333;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 35%; /* O "Unit" tem um tamanho fixo, diferente do "Production of the Stone" */

  &:focus {
    border-color: #4CAF50;
  }

  &:hover {
    border-color: #888;
  }
`;

// Estilo para o label (rótulo) de cada campo de input
export const Label = styled.label`
  font-size: 14px;
  color: #7D7D7D; /* Cor do texto do label */
  font-weight: bold;
`;

// Estilo para os inputs com fundo transparente
export const Input = styled.input`
  padding: 12px 10px;
  font-size: 16px;
  border: 1px solid #7D7D7D; /* Cor do contorno do input */
  background-color: transparent; /* Fundo transparente */
  color: #333; /* Cor do texto */
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%; /* Garante que o input ocupe toda a largura do container */

  &:focus {
    border-color: #4CAF50; /* Cor do contorno quando o campo é focado */
  }

  &:hover {
    border-color: #888; /* Cor ao passar o mouse sobre o input */
  }

  &::placeholder {
    color: transparent; /* Esconde o texto do placeholder */
  }
`;

// Estilo para o botão "Save"
export const SaveButton = styled.button`
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #388e3c;
  }

  grid-column: span 2; /* O botão ocupa toda a largura da grid */
`;