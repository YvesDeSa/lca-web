import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const WasteForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="wasteType">Type of solid waste generated</Label>
      <Input type="text" id="wasteType" placeholder="Enter waste type" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantity">Quantity of solid waste generated</Label>
      <Input type="number" id="quantity" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="measurement">Measurement</Label>
      <Input type="text" id="measurement" placeholder="Enter measurement details" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="dataSource">Described data source</Label>
      <Input type="text" id="dataSource" placeholder="Enter data source" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="disposalMethod">Method of reclaiming, recycling, or disposal</Label>
      <Input type="text" id="disposalMethod" placeholder="Enter disposal method" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="distanceToDam">Distance between the tailings dam and the industry</Label>
      <Input type="number" id="distanceToDam" placeholder="Enter distance (km)" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default WasteForm;
