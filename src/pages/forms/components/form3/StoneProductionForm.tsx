import React from 'react';
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  SaveButton,
} from './../../style';

const StoneProductionForm: React.FC = () => (
  <FormContainer>
    <InputContainer>
      <Label htmlFor="netProduction">Net production of the stone</Label>
      <Input type="number" id="netProduction" placeholder="Enter net production" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="claddingPanels">Percentage going to cladding panels</Label>
      <Input type="number" id="claddingPanels" placeholder="Enter percentage" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="stoneCladding">Percentage for stone cladding</Label>
      <Input type="number" id="stoneCladding" placeholder="Enter percentage" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="flooring">Percentage of stone going to flooring</Label>
      <Input type="number" id="flooring" placeholder="Enter percentage" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="paving">Percentage of stone going to paving</Label>
      <Input type="number" id="paving" placeholder="Enter percentage" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="countertops">Percentage going to slab for countertops</Label>
      <Input type="number" id="countertops" placeholder="Enter percentage" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="otherProducts">Percentage going to other products</Label>
      <Input type="number" id="otherProducts" placeholder="Enter percentage" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="stoneType">Stone type</Label>
      <Input type="text" id="stoneType" placeholder="Enter stone type" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="unit">Unit</Label>
      <Input type="text" id="unit" placeholder="Enter unit" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="destination">Stone destination location</Label>
      <Input type="text" id="destination" placeholder="Enter destination" />
    </InputContainer>
    <SaveButton>Save</SaveButton>
  </FormContainer>
);

export default StoneProductionForm;
