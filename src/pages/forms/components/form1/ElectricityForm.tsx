import React from 'react';
import { FormContainer, InputContainer, Label, Input, SaveButton } from './../../style';

const ElectricityForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="officeElectricity">Office/personal electricity</Label>
      <Input type="text" id="officeElectricity" placeholder="Enter office electricity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityEnergy">Quantity of energy (kWh)</Label>
      <Input type="number" id="quantityEnergy" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="renewableEnergy">Quantity of renewable energy (kWh)</Label>
      <Input type="number" id="renewableEnergy" placeholder="Enter quantity" />
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
      <Label htmlFor="crushingOps">Crushing operations</Label>
      <Input type="text" id="crushingOps" placeholder="Enter operations" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="utilityName">Electricity utility company name</Label>
      <Input type="text" id="utilityName" placeholder="Enter company name" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default ElectricityForm;
