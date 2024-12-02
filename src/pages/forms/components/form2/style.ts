import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #2e2e2e;
`;

export const StyledTab = styled.button<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? '#323232' : 'transparent')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#7d7d7d')};
  border: ${({ selected }) => (selected ? '2px solid #3F3F3F' : '2px solid #3F3F3F')};
  border-radius: ${({ selected }) => (selected ? '16px 16px 0 0' : '20px')};
  margin-right: 8px;
  margin-bottom: ${({ selected }) => (selected ? '0' : '8px')};
  border-bottom: ${({ selected }) =>
    selected ? '2px solid #323232' : '2px solid #3F3F3F'};
  padding: 15px 50px;
  margin-bottom: ${({ selected }) => (selected ? '0' : '8px')};
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #ffffff;
  }
`;

export const TabContainer = styled.div<{ isFirstTabSelected?: boolean }>`
  background-color: #323232;
  border: 2px solid #3f3f3f;
  border-radius: ${({ isFirstTabSelected }) =>
    isFirstTabSelected ? '0 16px 16px 16px' : '16px'};
  padding: 24px;
  margin-top: -1px;
`;

export const SubTabContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  div{
    padding: 20px;
    z-index: 1 !important;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    height: 40px;
    background-color: #3F3F3F;
    z-index: 0;
  }

  &::before {
    flex-grow: 1; 
    border-radius: 16px 16px 0 0 ; 
    margin-right: -8px;
  }

  &::after {
    flex-grow: 1; 
    border-radius: 16px 16px 0 0; 
    margin-left: -8px;
  }
`;

export const SubTab = styled.button<{ selected?: boolean }>`
  z-index: 1;
  background-color: ${({ selected }) => (selected ? '#323232' : '#2e2e2e')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#7d7d7d')};
  border: 2px solid ${({ selected }) => (selected ? '#3f3f3f' : '#2e2e2e')};

  border-radius: 16px;
  padding: 8px 24px;
  margin: 0 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #ffffff;
  }
`;

export const FormsContainer = styled.div`
  z-index: 0;
  padding: 20px 0;
  background-color: #3F3F3F;
  border-radius: 20px;
`;
