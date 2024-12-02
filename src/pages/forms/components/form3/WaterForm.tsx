import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const WaterForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="waterSource">Water source</Label>
      <Input type="text" id="waterSource" placeholder="Enter water source" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantity">Quantity obtained</Label>
      <Input type="number" id="quantity" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="disposalMethod">Water disposal method</Label>
      <Input type="text" id="disposalMethod" placeholder="Enter disposal method" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="treatment">Treatment of water</Label>
      <Input type="text" id="treatment" placeholder="Enter treatment method" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default WaterForm;
