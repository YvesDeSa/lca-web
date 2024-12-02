import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const TransportationForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="destination">Destination (ZIP or city, state)</Label>
      <Input type="text" id="destination" placeholder="Enter destination" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="shipments">Number of shipments</Label>
      <Input type="number" id="shipments" placeholder="Enter number of shipments" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="metricTons">Metric tons</Label>
      <Input type="number" id="metricTons" placeholder="Enter metric tons" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="distance">Distance</Label>
      <Input type="number" id="distance" placeholder="Enter distance" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="distanceUnit">Distance unit</Label>
      <Input type="text" id="distanceUnit" placeholder="Enter distance unit (e.g., km, miles)" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="mode">Mode (truck, rail, ship)</Label>
      <Input type="text" id="mode" placeholder="Enter mode of transport" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="measurement">Measurement</Label>
      <Input type="text" id="measurement" placeholder="Enter measurement details" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="dataSource">Described data source</Label>
      <Input type="text" id="dataSource" placeholder="Enter data source" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default TransportationForm;
