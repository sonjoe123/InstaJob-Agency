import React, { useState } from "react";

// Define the type for an employer
type Employer = {
  id: number;
  name: string;
  description: string;
  username: string;
  contactInformation: string;
  companyAddress: string;
};

const employers: Employer[] = [
  { 
    id: 1, 
    name: "employer A", 
    description: "Total payments: $50,000\nPending payments: $10,000",
    username: "employer A",
    contactInformation: "employerA@gmail.com",
    companyAddress: "example_company_address"
  },
  { 
    id: 2, 
    name: "employer B", 
    description: "Total payments: $75,000\nPending payments: $15,000",
    username: "employer B",
    contactInformation: "employerB@gmail.com",
    companyAddress: "example_company_address2"
  },
  { 
    id: 3, 
    name: "employer C", 
    description: "Total payments: $60,000\nPending payments: $12,000",
    username: "employer C",
    contactInformation: "employerC@gmail.com",
    companyAddress: "example_company_address3"
  },
  { 
    id: 4, 
    name: "employer D", 
    description: "Total payments: $90,000\nPending payments: $20,000",
    username: "employer D",
    contactInformation: "employerD@gmail.com",
    companyAddress: "example_company_address4"
  },
  { 
    id: 5, 
    name: "employer E", 
    description: "Total payments: $55,000\nPending payments: $11,000",
    username: "employer E",
    contactInformation: "employerE@gmail.com",
    companyAddress: "example_company_address5"
  },
  { 
    id: 6, 
    name: "employer F", 
    description: "Total payments: $70,000\nPending payments: $14,000",
    username: "employer F",
    contactInformation: "employerF@gmail.com",
    companyAddress: "example_company_address6"
  },
  { 
    id: 7, 
    name: "employer G", 
    description: "Total payments: $65,000\nPending payments: $13,000",
    username: "employer G",
    contactInformation: "employerG@gmail.com",
    companyAddress: "example_company_address7"
  },
  { 
    id: 8, 
    name: "employer H", 
    description: "Total payments: $80,000\nPending payments: $16,000",
    username: "employer H",
    contactInformation: "employerH@gmail.com",
    companyAddress: "example_company_address8"
  },
  { 
    id: 9, 
    name: "employer I", 
    description: "Total payments: $45,000\nPending payments: $9,000",
    username: "employer I",
    contactInformation: "employerI@gmail.com",
    companyAddress: "example_company_address9"
  },
  { 
    id: 10, 
    name: "employer J", 
    description: "Total payments: $85,000\nPending payments: $17,000",
    username: "employer J",
    contactInformation: "employerJ@gmail.com",
    companyAddress: "example_company_address10"
  },
  // Add more employers as needed
];



const EmployerList = () => {
  const [selectedEmployer, setSelectedEmployer] = useState<Employer | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleEmployerClick = (employer: Employer) => {
    setSelectedEmployer(employer);
  };

  const handleInputChange = (field: keyof Employer, value: string) => {
    if (selectedEmployer) {
      setSelectedEmployer({ ...selectedEmployer, [field]: value });
    }
  };

  const filteredEmployers = employers.filter((employer) =>
    employer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3 p-3">
        <input
          type="text"
          placeholder="Search employers..."
          className="w-full p-2 mb-3 rounded-md bg-gray-800 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {filteredEmployers.map((employer) => (
            <li
              key={employer.id}
              className="employer-item p-3 border-b border-gray-300 cursor-pointer"
              onClick={() => handleEmployerClick(employer)}
            >
              <h3 className="text-black font-extrabold">{employer.name}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3">
  {selectedEmployer && (
    <div className="p-3">
      <h2 className="text-2xl font-bold mb-2 text-center">{selectedEmployer.name}</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="pr-2">Username:</td>
            <td>
              <input
                type="text"
                value={selectedEmployer.username}
                readOnly
                className="w-full p-2 bg-gray-500"
              />
            </td>
          </tr>
          <tr>
            <td className="pr-2">Contact Information:</td>
            <td>
              <input
                type="text"
                value={selectedEmployer.contactInformation}
                onChange={(e) => handleInputChange('contactInformation', e.target.value)}
                className="w-full p-2 bg-gray-200"
              />
            </td>
          </tr>
          <tr>
            <td className="pr-2">Company Address:</td>
            <td>
              <input
                type="text"
                value={selectedEmployer.companyAddress}
                onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                className="w-full p-2 bg-gray-200"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
  {selectedEmployer && (
    <div className="p-3 mt-4">
      <p className="mb-2">{selectedEmployer.description}</p>
    </div>
  )}
</div>
<div className="absolute bottom-4 right-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
            </div>
    </div>
  );
};

export default EmployerList;
