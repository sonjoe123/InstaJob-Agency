import React, { useState } from "react";

// Define the type for a professional
type Professional = {
  id: number;
  name: string;
  description: string;
};

const professionals: Professional[] = [
  { id: 1, name: "Professional A", description: "Professional A description..." },
  { id: 2, name: "Professional B", description: "Professional B description..." },
  { id: 3, name: "Professional C", description: "Professional C description..." },
  { id: 4, name: "Professional D", description: "Professional D description..." },
  { id: 5, name: "Professional E", description: "Professional E description..." },
  { id: 6, name: "Professional F", description: "Professional F description..." },
  { id: 7, name: "Professional G", description: "Professional G description..." },
  { id: 8, name: "Professional H", description: "Professional H description..." },
  { id: 9, name: "Professional I", description: "Professional I description..." },
  { id: 10, name: "Professional J", description: "Professional J description..." },
  { id: 11, name: "Professional K", description: "Professional K description..." },
  { id: 12, name: "Professional L", description: "Professional L description..." },
  { id: 13, name: "Professional M", description: "Professional M description..." },
  { id: 14, name: "Professional N", description: "Professional N description..." },
  { id: 15, name: "Professional O", description: "Professional O description..." },
  { id: 16, name: "Professional P", description: "Professional P description..." },
  { id: 17, name: "Professional Q", description: "Professional Q description..." },
  { id: 18, name: "Professional R", description: "Professional R description..." },
  { id: 19, name: "Professional S", description: "Professional S description..." },
  { id: 20, name: "Professional T", description: "Professional T description..." },
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
            <h2 className="text-2xl font-bold mb-2">{selectedProfessional.name}</h2>
            <p>{selectedProfessional.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalList;
