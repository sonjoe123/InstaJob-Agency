import React, { useState } from "react";

// Define the type for an employer
type Employer = {
  id: number;
  name: string;
  description: string;
};

const employers: Employer[] = [
  { id: 1, name: "Employer A", description: "Employer A description..." },
  { id: 2, name: "Employer B", description: "Employer B description..." },
  { id: 3, name: "Employer C", description: "Employer C description..." },
  { id: 4, name: "Employer D", description: "Employer D description..." },
  { id: 5, name: "Employer E", description: "Employer E description..." },
  { id: 6, name: "Employer F", description: "Employer F description..." },
  { id: 7, name: "Employer G", description: "Employer G description..." },
  { id: 8, name: "Employer H", description: "Employer H description..." },
  { id: 9, name: "Employer I", description: "Employer I description..." },
  { id: 10, name: "Employer J", description: "Employer J description..." },
  { id: 11, name: "Employer K", description: "Employer K description..." },
  { id: 12, name: "Employer L", description: "Employer L description..." },
  { id: 13, name: "Employer M", description: "Employer M description..." },
  { id: 14, name: "Employer N", description: "Employer N description..." },
  { id: 15, name: "Employer O", description: "Employer O description..." },
  { id: 16, name: "Employer P", description: "Employer P description..." },
  { id: 17, name: "Employer Q", description: "Employer Q description..." },
  { id: 18, name: "Employer R", description: "Employer R description..." },
  { id: 19, name: "Employer S", description: "Employer S description..." },
  { id: 20, name: "Employer T", description: "Employer T description..." },
];

const EmployerList = () => {
  const [selectedEmployer, setSelectedEmployer] = useState<Employer | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleEmployerClick = (employer: Employer) => {
    setSelectedEmployer(employer);
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
            <h2 className="text-2xl font-bold mb-2">{selectedEmployer.name}</h2>
            <p>{selectedEmployer.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerList;
