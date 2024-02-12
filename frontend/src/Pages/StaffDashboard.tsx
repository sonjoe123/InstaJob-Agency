import React from 'react';
import Sidebar from '../Components/StaffDashboardComponents/Sidebar.tsx';

import Navigation from '../Components/Navigation/Navigation.tsx';
import EmployerList from '../Components/StaffDashboardComponents/EmployerList.tsx';
import ProfessionalList from '../Components/StaffDashboardComponents/ProfessionalList.tsx';
import EmployerRequest from '../Components/StaffDashboardComponents/EmployerRequest.tsx';
import ProfessionalRequest from '../Components/StaffDashboardComponents/ProfessionalRequest.tsx';
import MatchingProcess from '../Components/StaffDashboardComponents/MatchingProcess.tsx';
import EditAccount from '../Components/StaffDashboardComponents/EditAccount.tsx';
import EmployerDeleteRequest from '../Components/StaffDashboardComponents/EmployerDeleteRequest.tsx';
import ProfessionalDeleteRequest from '../Components/StaffDashboardComponents/ProfessionalDeleteRequest.tsx';
import { styled } from "styled-components"
const StaffDashboard = () => {
    const [activeComponent, setActiveComponent] = React.useState("EmployerList");

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
            {activeComponent === 'EmployerList' && <EmployerList />}
            {activeComponent === 'ProfessionalList' && <ProfessionalList/>}
            {activeComponent === 'EmployerRequest' && <EmployerRequest/>}
            {activeComponent === 'ProfessionalRequest' && <ProfessionalRequest/>}
            {activeComponent === 'MatchingProcess' && <MatchingProcess/>}
            {activeComponent === 'EditAccount' && <EditAccount/>}
            {activeComponent === 'EmployerDeleteRequest' && <EmployerDeleteRequest/>}
            {activeComponent === 'ProfessionalDeleteRequest' && <ProfessionalDeleteRequest/>}

            </DashboardContainer> 
            </main>
          </div>
        </div>
      );
};
export default StaffDashboard;

const DashboardContainer = styled.div `
    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin: 30px;
    margin-top: 25px;
    margin-left: 170px;
    height: calc(100vh - 100px);
`