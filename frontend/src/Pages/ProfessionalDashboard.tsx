import React from 'react';
import Sidebar from '../Components/ProfessionalDashboardComponents/Sidebar.tsx';
import Navigation from '../Components/Navigation/Navigation.tsx';
import JobPostings from '../Components/ProfessionalDashboardComponents/JobPostings.tsx';
import CurrentApplications from '../Components/ProfessionalDashboardComponents/CurrentApplications.tsx';
import AccountSettings from '../Components/ProfessionalDashboardComponents/AccountSettings.tsx';
import { styled } from "styled-components"

const ProfessionalDashboard = () => {

    const [activeComponent, setActiveComponent] = React.useState("JobPostings");

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
      };

  return (
    <div className="overflow-hidden pb-0">
      <Navigation accountName="John Smith" />
      <div className="flex">
        <Sidebar onComponentChange={handleComponentChange}/>
        <main className="flex-grow ml-10 p-4 pb-4 bg-white">
            <DashboardContainer>
            {activeComponent === 'JobPostings' && <JobPostings />}
            {activeComponent === 'CurrentApplications' && <CurrentApplications />}
            {activeComponent === 'AccountSettings' && <AccountSettings />}
            </DashboardContainer> 
        </main>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;



const DashboardContainer = styled.div `
    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin: 30px;
    margin-top: 25px;
    margin-left: 170px;
    height: calc(100vh - 100px);
`