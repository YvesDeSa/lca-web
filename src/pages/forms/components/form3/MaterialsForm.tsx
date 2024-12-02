import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const MaterialsForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="materialType">Material type</Label>
      <Input type="text" id="materialType" placeholder="Enter material type" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantity">Quantity consumed</Label>
      <Input type="number" id="quantity" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="sourceLocation">Source location</Label>
      <Input type="text" id="sourceLocation" placeholder="Enter source location" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="transportMode">Mode of transport</Label>
      <Input type="text" id="transportMode" placeholder="Enter mode of transport" />
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
      <Label htmlFor="industryCountry">Country in which the industry is located</Label>
      <Input type="text" id="industryCountry" placeholder="Enter country" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="disposalMethod">How the input will be disposed of after its useful life</Label>
      <Input type="text" id="disposalMethod" placeholder="Enter disposal method" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="notes">Notes</Label>
      <Input type="text" id="notes" placeholder="Enter notes" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default MaterialsForm;
