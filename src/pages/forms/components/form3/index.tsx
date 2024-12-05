import React, { useState } from 'react';
import {
  StyledTabs,
  StyledTab,
  SubTabContainer,
  SubTab,
  TabContainer,
  FormsContainer,
} from './style';

import StoneMassForm from './StoneMassForm';
import StoneProductionForm from './StoneProductionForm';
import WaterForm from './WaterForm';
import ElectricityForm from './ElectricityForm';
import FuelsForm from './FuelsForm';
import MaterialsForm from './MaterialsForm';
import WasteForm from './WasteForm';
import SludgeForm from './SludgeForm';
import EPMForm from './EPMForm';


const TabsWithSubTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // Aba principal ativa
  const [activeSubTab, setActiveSubTab] = useState(0); // Sub-aba ativa

  const handleMainTabChange = (index: number) => {
    setActiveTab(index);
    setActiveSubTab(0);
  };

  return (
    <>
      <StyledTabs>
        <StyledTab selected={activeTab === 0} onClick={() => handleMainTabChange(0)}>
          Production Overview
        </StyledTab>
        <StyledTab selected={activeTab === 1} onClick={() => handleMainTabChange(1)}>
          Inputs
        </StyledTab>
        <StyledTab selected={activeTab === 2} onClick={() => handleMainTabChange(2)}>
          Outputs
        </StyledTab>
      </StyledTabs>

      <TabContainer isFirstTabSelected={activeTab === 0}>
        {activeTab === 0 && (
          <>
            <SubTabContainer>
      <SubTab selected={activeSubTab === 0} onClick={() => setActiveSubTab(0)}>
        Stone Mass
      </SubTab>
      <SubTab selected={activeSubTab === 1} onClick={() => setActiveSubTab(1)}>
        Stone Product
      </SubTab>
    </SubTabContainer>
    <FormsContainer>
            {activeSubTab === 0 && <StoneMassForm />}
            {activeSubTab === 1 && <StoneProductionForm />}
            </FormsContainer>
          </>
        )}

        {activeTab === 1 && (
          <>
            <SubTabContainer>
              <SubTab selected={activeSubTab === 0} onClick={() => setActiveSubTab(0)}>
                Water
              </SubTab>
              <SubTab selected={activeSubTab === 1} onClick={() => setActiveSubTab(1)}>
                Electricity
              </SubTab>
              <SubTab selected={activeSubTab === 2} onClick={() => setActiveSubTab(2)}>
                Fuels
              </SubTab>
              <SubTab selected={activeSubTab === 3} onClick={() => setActiveSubTab(3)}>
                Materials
              </SubTab>
            </SubTabContainer>
            <FormsContainer>
            {activeSubTab === 0 && <WaterForm />}
            {activeSubTab === 1 && <ElectricityForm />}
            {activeSubTab === 2 && <FuelsForm />}
            {activeSubTab === 3 && <MaterialsForm />}
            </FormsContainer>
            
          </>
        )}

        {activeTab === 2 && (
          <>
           <SubTabContainer>
      <SubTab selected={activeSubTab === 0} onClick={() => setActiveSubTab(0)}>
        Waste
      </SubTab>
      <SubTab selected={activeSubTab === 1} onClick={() => setActiveSubTab(1)}>
        Sludge
      </SubTab>
      <SubTab selected={activeSubTab === 2} onClick={() => setActiveSubTab(2)}>
        EPM
      </SubTab>
    </SubTabContainer>
    <FormsContainer>
            {activeSubTab === 0 && <WasteForm />}
            {activeSubTab === 1 && <SludgeForm />}
            {activeSubTab === 2 && <EPMForm />}
            </FormsContainer>
          </>
        )}
      </TabContainer>
    </>
  );
};

export default TabsWithSubTabs;
