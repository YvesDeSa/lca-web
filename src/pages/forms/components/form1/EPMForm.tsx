import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const EPMForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="calendar">Calendar</Label>
      <Input type="text" id="calendar" placeholder="Enter calendar" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="materialType">Type of excess material</Label>
      <Input type="text" id="materialType" placeholder="Enter material type" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityGenerated">Quantity of excess material generated</Label>
      <Input type="number" id="quantityGenerated" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="measurement">Measurement</Label>
      <Input type="text" id="measurement" placeholder="Enter measurement" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityReclaimed">Quantity reclaimed</Label>
      <Input type="number" id="quantityReclaimed" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityRecycled">Quantity recycled</Label>
      <Input type="number" id="quantityRecycled" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="quantityDisposed">Quantity disposed</Label>
      <Input type="number" id="quantityDisposed" placeholder="Enter quantity" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="disposalMethod">Method of reclaiming, recycling, or disposal</Label>
      <Input type="text" id="disposalMethod" placeholder="Enter method" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default EPMForm;
