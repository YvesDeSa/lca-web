import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
  InputWrapper,
  MainInput,
  InnerInput,
} from './../../style';

const StoneMassForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="quarryLocation">Quarry location</Label>
      <Input type="text" id="quarryLocation" placeholder="Enter quarry location" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="stoneType">Stone type</Label>
      <Input type="text" id="stoneType" placeholder="Enter stone type" />
    </InputContainer>
    <InputWrapper>
      <Label htmlFor="inputMass">Mass of input stone</Label>
      <MainInput id="inputMass" type="number" placeholder="Enter mass" />
      <InnerInput id="inputMass-unit" type="text" placeholder="Unit" />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="massPerUnit">Stone mass per unit volume</Label>
      <MainInput id="massPerUnit" type="number" placeholder="Enter mass per unit" />
      <InnerInput id="massPerUnit-unit" type="text" placeholder="Unit" />
    </InputWrapper>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default StoneMassForm;
