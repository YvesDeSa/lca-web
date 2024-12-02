import React from 'react';
import { FormContainer, InputContainer, Label, Input, SaveButton, InnerInput, MainInput, InputWrapper } from './../../style';

const ProductionForm: React.FC = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Label htmlFor="quarryType">Quarry type</Label>
        <Input type="text" id="quarryType" placeholder="Enter quarry type" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="quarryTechnique">Quarry technique</Label>
        <Input type="text" id="quarryTechnique" placeholder="Enter quarry technique" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="quarryTechniqueNotes">Quarry technique notes</Label>
        <Input type="text" id="quarryTechniqueNotes" placeholder="Enter notes" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="stoneType">Stone type</Label>
        <Input type="text" id="stoneType" placeholder="Enter stone type" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="timePeriod">Time period represented</Label>
        <Input type="text" id="timePeriod" placeholder="Enter time period" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="stoneMass">Stone destination location</Label>
        <Input type="number" id="stoneMass" placeholder="Enter stone mass" />
      </InputContainer>

      <InputWrapper>
    <Label htmlFor="production">Production of the Stone</Label>
    <MainInput id="production" type="text" placeholder="Production of the Stone" />
    <InnerInput id="unit" type="text" placeholder="Unit" />
  </InputWrapper>

  <InputWrapper>
    <Label htmlFor="production">Stone mass per unit volume</Label>
    <MainInput id="production" type="text" placeholder="Production of the Stone" />
    <InnerInput id="unit" type="text" placeholder="Unit" />
  </InputWrapper>

      <SaveButton>Save</SaveButton>
    </FormContainer>
  );
};

export default ProductionForm;
