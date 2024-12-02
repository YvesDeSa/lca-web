import React, { useState } from 'react';
import {
  StyledTabs,
  StyledTab,
  SubTabContainer,
  SubTab,
  TabContainer,
  FormsContainer,
} from './style';
import TransportationForm from './TransportationForm';


const TabsWithSubTabs: React.FC = () => {

  return (
    <>
      <TabContainer>
        <FormsContainer>
          <TransportationForm />
        </FormsContainer>
      </TabContainer>
    </>
  );
};

export default TabsWithSubTabs;
