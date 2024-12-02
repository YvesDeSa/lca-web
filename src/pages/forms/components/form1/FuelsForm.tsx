import React from 'react';
import { FormContainer, InputContainer, Label, Input, SaveButton } from './../../style';

const FuelsForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="fuelType">Fuel / Energy type</Label>
      <Input type="text" id="fuelType" placeholder="Enter type" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityConsumed">Quantity consumed</Label>
      <Input type="number" id="quantityConsumed" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="measurement">Measurement</Label>
      <Input type="text" id="measurement" placeholder="Enter measurement" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="dataSource">Data source</Label>
      <Input type="text" id="dataSource" placeholder="Enter data source" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="officeActivity">Office/personnel activity</Label>
      <Input type="text" id="officeActivity" placeholder="Enter activity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="crushingOps">Crushing operations</Label>
      <Input type="text" id="crushingOps" placeholder="Enter operations" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default FuelsForm;
