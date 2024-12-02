import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const FuelsForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="fuelType">Fuel / Energy type</Label>
      <Input type="text" id="fuelType" placeholder="Enter fuel type" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantity">Quantity consumed</Label>
      <Input type="number" id="quantity" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="measurement">Measurement</Label>
      <Input type="text" id="measurement" placeholder="Enter measurement details" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="dataSource">Data source</Label>
      <Input type="text" id="dataSource" placeholder="Enter data source" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default FuelsForm;
