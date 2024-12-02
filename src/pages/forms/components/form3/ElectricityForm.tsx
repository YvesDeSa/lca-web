import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const ElectricityForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityEnergy">Quantity of energy (kWh)</Label>
      <Input type="number" id="quantityEnergy" placeholder="Enter energy quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="renewableEnergy">Quantity of renewable energy (kWh)</Label>
      <Input type="number" id="renewableEnergy" placeholder="Enter renewable energy quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="crushingOps">Crushing operations</Label>
      <Input type="text" id="crushingOps" placeholder="Enter crushing operations" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="measurement">Measurement</Label>
      <Input type="text" id="measurement" placeholder="Enter measurement details" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="dataSource">Data source</Label>
      <Input type="text" id="dataSource" placeholder="Enter data source" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="utilityName">Electricity utility company name</Label>
      <Input type="text" id="utilityName" placeholder="Enter utility company name" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default ElectricityForm;
