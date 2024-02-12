import React, { useState } from "react";

// Define the type for an employer
type Employer = {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  username: string;
  contactInformation: string;
  mailingAddress: string;
  description: string;
};

const employers: Employer[] = [
  {
    id: 2,
    firstName: "Employer",
    lastName: "B",
    companyName: "Example Company B",
    username: "employer_b",
    contactInformation: "(456) 789-0123 | employerB@gmail.com",
    mailingAddress: "456 Example Ave, Town, Country",
    description: "Total payment: $10,000 | Pending payment: $5000"
  },
  {
    id: 3,
    firstName: "Employer",
    lastName: "C",
    companyName: "Example Company C",
    username: "employer_c",
    contactInformation: "(789) 012-3456 | employerC@gmail.com",
    mailingAddress: "789 Example Blvd, Village, Country",
    description: "Total payment: $12,000 | Pending payment: $6000"
  },
  {
    id: 4,
    firstName: "Employer",
    lastName: "D",
    companyName: "Example Company D",
    username: "employer_d",
    contactInformation: "(012) 345-6789 | employerD@gmail.com",
    mailingAddress: "012 Example Rd, District, Country",
    description: "Total payment: $15,000 | Pending payment: $7500"
  },
  {
    id: 5,
    firstName: "Employer",
    lastName: "E",
    companyName: "Example Company E",
    username: "employer_e",
    contactInformation: "(234) 567-8901 | employerE@gmail.com",
    mailingAddress: "234 Example Ln, City, Country",
    description: "Total payment: $8,000 | Pending payment: $4000"
  },
  {
    id: 6,
    firstName: "Employer",
    lastName: "F",
    companyName: "Example Company F",
    username: "employer_f",
    contactInformation: "(567) 890-1234 | employerF@gmail.com",
    mailingAddress: "567 Example Ct, Town, Country",
    description: "Total payment: $20,000 | Pending payment: $10000"
  },
  {
    id: 7,
    firstName: "Employer",
    lastName: "G",
    companyName: "Example Company G",
    username: "employer_g",
    contactInformation: "(890) 123-4567 | employerG@gmail.com",
    mailingAddress: "890 Example Pl, Village, Country",
    description: "Total payment: $25,000 | Pending payment: $12500"
  },
  {
    id: 8,
    firstName: "Employer",
    lastName: "H",
    companyName: "Example Company H",
    username: "employer_h",
    contactInformation: "(123) 456-7890 | employerH@gmail.com",
    mailingAddress: "123 Example Rd, District, Country",
    description: "Total payment: $18,000 | Pending payment: $9000"
  },
  {
    id: 9,
    firstName: "Employer",
    lastName: "I",
    companyName: "Example Company I",
    username: "employer_i",
    contactInformation: "(456) 789-0123 | employerI@gmail.com",
    mailingAddress: "456 Example Ln, City, Country",
    description: "Total payment: $22,000 | Pending payment: $11000"
  },
  {
    id: 10,
    firstName: "Employer",
    lastName: "J",
    companyName: "Example Company J",
    username: "employer_j",
    contactInformation: "(789) 012-3456 | employerJ@gmail.com",
    mailingAddress: "789 Example Ave, Town, Country",
    description: "Total payment: $30,000 | Pending payment: $15000"
  },
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
    `${employer.firstName} ${employer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h3 className="text-black font-extrabold">
                {`${employer.firstName} ${employer.lastName}`}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3">
        {selectedEmployer && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {`${selectedEmployer.firstName} ${selectedEmployer.lastName}`}
            </h2>
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
                      onChange={(e) => handleInputChange("contactInformation", e.target.value)}
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Mailing Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.mailingAddress}
                      onChange={(e) => handleInputChange("mailingAddress", e.target.value)}
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Company name:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                  
                </tr>
                <tr> 
                <td className="pr-2">Description:</td>
                  <td>
                    <input
                       type="text"
                      value={selectedEmployer.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="w-full p-2 bg-gray-200 resize-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        
      </div>
      <div className="absolute bottom-4 right-4 space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
            
    </div>
  );
};

export default EmployerList;