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

const SludgeForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="distanceToDam">Distance between the tailings dam and the industry</Label>
      <Input type="number" id="distanceToDam" placeholder="Enter distance (km)" />
    </InputContainer>
    <InputWrapper>
      <Label htmlFor="sludgeDisposed">Quantity of sludge disposed of off-site</Label>
      <MainInput id="sludgeDisposed" type="number" placeholder="Enter quantity" />
      <InnerInput id="sludgeDisposed-unit" type="text" placeholder="Unit" />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="sludgeWaterBodies">Quantity of sludge entering bodies of water</Label>
      <MainInput id="sludgeWaterBodies" type="number" placeholder="Enter quantity" />
      <InnerInput id="sludgeWaterBodies-unit" type="text" placeholder="Unit" />
    </InputWrapper>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default SludgeForm;
