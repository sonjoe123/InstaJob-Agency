import React, { useState } from "react";
type Professional = {
  id: number;
  name: string;
  username: string;
  contactInformation: string;
  companyAddress: string;
  firstname: string;
  lastname: string;
  degreeDetails: string;
  qualifications: {
    category: string;
    keywords: string[];
  }[];
  description: string; // Added description field
};

const professionals: Professional[] = [
  { 
    id: 3, 
    name: "Professional C", 
    description: "Total Payments: $60,000 | Pending Payments: $12,000",
    username: "professional_c",
    contactInformation: "professional_c@gmail.com | (345) 678-9012",
    companyAddress: "789 Professional Blvd",
    firstname: "David",
    lastname: "Johnson",
    degreeDetails: "Bachelor of Arts in English Literature",
    qualifications: [
      { category: "Languages", keywords: ["Ruby, PHP"] },
      { category: "Tools", keywords: ["Atom, NetBeans"] },
      { category: "Database", keywords: ["SQLite, Redis"] },
      { category: "Experience", keywords: ["4 years"] }
    ]
  },
  { 
    id: 4, 
    name: "Professional D", 
    description: "Total Payments: $90,000 | Pending Payments: $20,000",
    username: "professional_d",
    contactInformation: "professional_d@gmail.com | (456) 789-0123",
    companyAddress: "1011 Professional Rd",
    firstname: "Emily",
    lastname: "Brown",
    degreeDetails: "Bachelor of Science in Computer Science",
    qualifications: [
      { category: "Languages", keywords: ["C#, Swift"] },
      { category: "Tools", keywords: ["Xcode, Visual Studio"] },
      { category: "Database", keywords: ["PostgreSQL, Firebase"] },
      { category: "Experience", keywords: ["2 years"] }
    ]
  },
  
  { 
    id: 6, 
    name: "Professional F", 
    description: "Total Payments: $70,000 | Pending Payments: $14,000",
    username: "professional_f",
    contactInformation: "professional_f@gmail.com | (678) 901-2345",
    companyAddress: "1617 Professional Ct",
    firstname: "Jennifer",
    lastname: "Martinez",
    degreeDetails: "Master of Science in Computer Engineering",
    qualifications: [
      { category: "Languages", keywords: ["Java, Python"] },
      { category: "Tools", keywords: ["IntelliJ IDEA, PyCharm"] },
      { category: "Database", keywords: ["SQLite, MongoDB"] },
      { category: "Experience", keywords: ["4 years"] }
    ]
  },
  { 
    id: 7, 
    name: "Professional G", 
    description: "Total Payments: $65,000 | Pending Payments: $13,000",
    username: "professional_g",
    contactInformation: "professional_g@gmail.com | (789) 012-3456",
    companyAddress: "1819 Professional Pl",
    firstname: "Matthew",
    lastname: "Lopez",
    degreeDetails: "Bachelor of Science in Mechanical Engineering",
    qualifications: [
      { category: "Languages", keywords: ["C, C++"] },
      { category: "Tools", keywords: ["Visual Studio Code, Xcode"] },
      { category: "Database", keywords: ["PostgreSQL, SQLite"] },
      { category: "Experience", keywords: ["3 years"] }
    ]
  },
  { 
    id: 8, 
    name: "Professional H", 
    description: "Total Payments: $80,000 | Pending Payments: $16,000",
    username: "professional_h",
    contactInformation: "professional_h@gmail.com | (890) 123-4567",
    companyAddress: "2123 Professional Way",
    firstname: "Jessica",
    lastname: "Lee",
    degreeDetails: "Master of Science in Information Technology",
    qualifications: [
      { category: "Languages", keywords: ["Python, Java"] },
      { category: "Tools", keywords: ["VS Code, PyCharm"] },
      { category: "Database", keywords: ["MySQL, SQLite"] },
      { category: "Experience", keywords: ["5 years"] }
    ]
  },
  { 
    id: 9, 
    name: "Professional I", 
    description: "Total Payments: $45,000 | Pending Payments: $9,000",
    username: "professional_i",
    contactInformation: "professional_i@gmail.com | (901) 234-5678",
    companyAddress: "2425 Professional Circle",
    firstname: "Daniel",
    lastname: "Walker",
    degreeDetails: "Bachelor of Science in Computer Engineering",
    qualifications: [
      { category: "Languages", keywords: ["JavaScript, C#"] },
      { category: "Tools", keywords: ["Visual Studio, Sublime Text"] },
      { category: "Database", keywords: ["MongoDB, MySQL"] },
      { category: "Experience", keywords: ["2 years"] }
    ]
  },
  { 
    id: 10, 
    name: "Professional J", 
    description: "Total Payments: $85,000 | Pending Payments: $17,000",
    username: "professional_j",
    contactInformation: "professional_j@gmail.com | (012) 345-6789",
    companyAddress: "2627 Professional Park",
    firstname: "Sarah",
    lastname: "White",
    degreeDetails: "Master of Science in Data Science",
    qualifications: [
      { category: "Languages", keywords: ["Python, R"] },
      { category: "Tools", keywords: ["Jupyter Notebook, RStudio"] },
      { category: "Database", keywords: ["SQL Server, PostgreSQL"] },
      { category: "Experience", keywords: ["3 years"] }
    ]
  }
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
  const handleInputChange2 = (field: keyof Professional, value: string, qualificationIndex: number, keywordIndex: number) => {
    if (selectedProfessional) {
      // Create a copy of the selectedProfessional object
      const updatedProfessional = { ...selectedProfessional };
      // Update the value of the specified keyword within the specified qualification
      updatedProfessional.qualifications[qualificationIndex].keywords[keywordIndex] = value;
      // Set the updatedProfessional object as the new selectedProfessional
      setSelectedProfessional(updatedProfessional);
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
      <div className="w-2/3 ">
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
          <tr>
            <td className="pr-2">Degree Details:</td>
            <td>
              <input
                type="text"
                value={selectedProfessional.degreeDetails}
                onChange={(e) => handleInputChange('degreeDetails', e.target.value)}
                className="w-full p-2 bg-gray-200"
              />
            </td>
          </tr>
          <tr>
  <td className="pr-2">Qualifications:</td>
  <td>
    <ul className="text-left">
      {selectedProfessional.qualifications.map((qualification, qualificationIndex) => (
        <li key={qualificationIndex}>
          <strong>{qualification.category}:</strong>{" "}
          {/* Map through keywords and render input fields */}
          {qualification.keywords.map((keyword, keywordIndex) => (
            <input
              key={keywordIndex}
              type="text"
              value={keyword}
              onChange={(e) => handleInputChange2("qualifications", e.target.value, qualificationIndex, keywordIndex)}
              className="w-full p-2 bg-gray-200"
            />
          ))}
        </li>
      ))}
    </ul>
  </td>
</tr>
          <tr> 
                <td className="pr-2">Description:</td>
                  <td>
                    <input
                       type="text"
                      value={selectedProfessional.description}
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


export default ProfessionalList;
