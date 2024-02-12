import React from 'react';
import Navigation from '../Components/Navigation/Navigation.tsx';
import StaffRoot from '../Components/StaffDashboardComponents/StaffRoot.tsx';
import { styled } from "styled-components"

const StaffRootAccount = () => {
    const [activeComponent, setActiveComponent] = React.useState("JobPostings");

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
      };
      return (
        <div className="overflow-hidden pb-0">
          <Navigation accountName="root root" />
          <div className="flex">
            
            <main className="flex-grow ml-10 p-4 pb-4 bg-white">
            <DashboardContainer>
            <StaffRoot/>


            </DashboardContainer> 
            </main>
          </div>
        </div>
      );
};
export default StaffRootAccount;

const DashboardContainer = styled.div `
    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin: 30px;
    margin-top: 25px;
    margin-left: 170px;
    height: calc(100vh - 100px);
`
