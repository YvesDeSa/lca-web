import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  background-color: #2E2E2E;
  padding: 24px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 16px;
  }
`;

export const FormContainer = styled.div`
  background-color: #323232;
  border: solid 1px #3F3F3F;
  border-radius: 25px;

  text-align: center;

  height: 96%; 
  width: 90%; 

  h1 {
    color: #D6D6D6;
    font-size: 28px;
    font-weight: 400;
    margin: 20px auto 5px;
  }

  h3 {
    color: #D6D6D6;
    font-size: 18px;
    font-weight: 400;
    margin: 2% 0 0 10%;
    text-align: start;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 16px;
  }
`;

export const InputsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 2px solid #3F3F3F;
  border-bottom: 2px solid #3F3F3F;
  padding-top: 15px;
  padding-bottom: 15px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const FormGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr; 
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; 
  }
`;

export const StyledInput = styled.input`
  background-color: #3F3F3F;
  padding: 10px;
  border: 2px solid #7D7D7D;
  border-radius: 20px;
  font-size: 16px;
  width: 100%; 
  color: #7D7D7D;

  &:focus {
    outline: none;
    border-color: #3C9A36;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px; 
  flex-wrap: wrap; 
  margin-top: 10px;
`;

export const UploadButton = styled.button`
  background-color: #3F3F3F;
  color: #7D7D7D;
  width: 80px;
  height: 80px;
  border: 2px dashed #7D7D7D;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 10%;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 14px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 2px solid #7D7D7D;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #3F3F3F;
  color: #7D7D7D;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 12px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 90%;
  height: 40px;
  margin: 20px auto;

  border-radius: 20px;
  background-color: #3C9A36;
  color: #000;

  @media (min-width: 768px) {
    width: 80%;
    height: 8%;
  }
`;
