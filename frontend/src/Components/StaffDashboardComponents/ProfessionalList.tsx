import React, { useState } from "react";

// Define the type for a professional
type Professional = {
  id: number;
  name: string;
  description: string;
  username: string;
  contactInformation: string;
  companyAddress: string;
};

const professionals: Professional[] = [
  { 
    id: 1, 
    name: "Professional A", 
    description: "Total payments: $50,000\nPending payments: $10,000\nLast payment date: 2023-01-15\nNext payment date: 2023-02-15",
    username: "professional_a",
    contactInformation: "professional_a@gmail.com",
    companyAddress: "123 Professional St, Professional City, USA"
  },
  { 
    id: 2, 
    name: "Professional B", 
    description: "Total payments: $75,000\nPending payments: $15,000\nLast payment date: 2023-02-01\nNext payment date: 2023-03-01",
    username: "professional_b",
    contactInformation: "professional_b@gmail.com",
    companyAddress: "456 Professional Ave, Professional Town, USA"
  },
  { 
    id: 3, 
    name: "Professional C", 
    description: "Total payments: $60,000\nPending payments: $12,000\nLast payment date: 2023-03-10\nNext payment date: 2023-04-10",
    username: "professional_c",
    contactInformation: "professional_c@gmail.com",
    companyAddress: "789 Professional Blvd, Professional Village, USA"
  },
  { 
    id: 4, 
    name: "Professional D", 
    description: "Total payments: $90,000\nPending payments: $20,000\nLast payment date: 2023-04-20\nNext payment date: 2023-05-20",
    username: "professional_d",
    contactInformation: "professional_d@gmail.com",
    companyAddress: "1011 Professional Rd, Professional County, USA"
  },
  { 
    id: 5, 
    name: "Professional E", 
    description: "Total payments: $55,000\nPending payments: $11,000\nLast payment date: 2023-05-05\nNext payment date: 2023-06-05",
    username: "professional_e",
    contactInformation: "professional_e@gmail.com",
    companyAddress: "1315 Professional Ln, Professional District, USA"
  },
  { 
    id: 6, 
    name: "Professional F", 
    description: "Total payments: $70,000\nPending payments: $14,000\nLast payment date: 2023-06-15\nNext payment date: 2023-07-15",
    username: "professional_f",
    contactInformation: "professional_f@gmail.com",
    companyAddress: "1617 Professional Ct, Professional Township, USA"
  },
  { 
    id: 7, 
    name: "Professional G", 
    description: "Total payments: $65,000\nPending payments: $13,000\nLast payment date: 2023-07-25\nNext payment date: 2023-08-25",
    username: "professional_g",
    contactInformation: "professional_g@gmail.com",
    companyAddress: "1819 Professional Pl, Professional Hamlet, USA"
  },
  { 
    id: 8, 
    name: "Professional H", 
    description: "Total payments: $80,000\nPending payments: $16,000\nLast payment date: 2023-08-30\nNext payment date: 2023-09-30",
    username: "professional_h",
    contactInformation: "professional_h@gmail.com",
    companyAddress: "2123 Professional Way, Professional Manor, USA"
  },
  { 
    id: 9, 
    name: "Professional I", 
    description: "Total payments: $45,000\nPending payments: $9,000\nLast payment date: 2023-09-10\nNext payment date: 2023-10-10",
    username: "professional_i",
    contactInformation: "professional_i@gmail.com",
    companyAddress: "2425 Professional Circle, Professional Ranch, USA"
  },
  { 
    id: 10, 
    name: "Professional J", 
    description: "Total payments: $85,000\nPending payments: $17,000\nLast payment date: 2023-10-20\nNext payment date: 2023-11-20",
    username: "professional_j",
    contactInformation: "professional_j@gmail.com",
    companyAddress: "2627 Professional Park, Professional Haven, USA"
  },
  // Add more professionals as needed
];


const ProfessionalList = () => {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleProfessionalClick = (professional: Professional) => {
    setSelectedProfessional(professional);
  };

  const filteredProfessionals = professionals.filter((professional) =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleInputChange = (field: keyof Professional, value: string) => {
    if (selectedProfessional) {
      setSelectedProfessional({ ...selectedProfessional, [field]: value });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3 p-3">
        <input
          type="text"
          placeholder="Search professionals..."
          className="w-full p-2 mb-3 rounded-md bg-gray-800 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {filteredProfessionals.map((professional) => (
            <li
              key={professional.id}
              className="professional-item p-3 border-b border-gray-300 cursor-pointer"
              onClick={() => handleProfessionalClick(professional)}
            >
              <h3 className="text-black font-extrabold">{professional.name}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3">
      {selectedProfessional && (
    <div className="p-3">
      <h2 className="text-2xl font-bold mb-2 text-center">{selectedProfessional.name}</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="pr-2">Username:</td>
            <td>
              <input
                type="text"
                value={selectedProfessional.username}
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
                value={selectedProfessional.contactInformation}
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
                value={selectedProfessional.companyAddress}
                onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                className="w-full p-2 bg-gray-200"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
  {selectedProfessional && (
    <div className="p-3 mt-4">
      <p className="mb-2">{selectedProfessional.description}</p>
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

export default ProfessionalList;
