import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Professional = {
  id: number;
  name: string;
  username: string;
  contactInformation1: string;
  contactInformation2: string;
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
    name: "John Smith",
    description: "S7fagtXFR!!#",
    username: "John Smith",
    contactInformation1: "professional_c@gmail.com",
    contactInformation2: "(345) 678-9012",
    companyAddress: "789 Professional Blvd",
    firstname: "John",
    lastname: "Smith",
    degreeDetails: "Bachelor of Arts in English Literature",
    qualifications: [
      { category: "Languages", keywords: ["Ruby, PHP"] },
      { category: "Tools", keywords: ["Atom, NetBeans"] },
      { category: "Database", keywords: ["SQLite, Redis"] },
      { category: "Experience", keywords: ["4 years"] },
    ],
  },
];

const EditAccount = () => {
  const navigate = useNavigate();

  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional | null>(professionals[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProfessionals = professionals.filter((professional) =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (field: keyof Professional, value: string) => {
    if (selectedProfessional) {
      setSelectedProfessional({ ...selectedProfessional, [field]: value });
    }
  };

  const handleSave = () => {
    if (!selectedProfessional) {
      console.log("Selected professional is null. Exiting.");
      return;
    }

    const { username, contactInformation1, contactInformation2 } =
      selectedProfessional;

    if (!username.trim()) {
      alert("Username cannot be empty");
      return;
    }
    if (!contactInformation1.trim().endsWith("@gmail.com")) {
      alert("Email address must end with @gmail.com");
      return;
    }
    if (!/^\d{10,}$/.test(contactInformation2.replace(/\D/g, ""))) {
      alert("Phone number must contain at least 10 digits");
      return;
    }
    // If all validations pass, you can proceed to save the changes
    // For now, let's just log the selected professional
    alert("Saving changes...");

    // You can navigate to another page here after saving
    // navigate("/some-page");
  };

  const handleChangePassword = () => {
    navigate("/changepassword");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 mx-auto">
        {selectedProfessional && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {selectedProfessional.name}
            </h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="pr-2">Username:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Email Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.contactInformation1}
                      onChange={(e) =>
                        handleInputChange("contactInformation1", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Contact Number:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.contactInformation2}
                      onChange={(e) =>
                        handleInputChange("contactInformation2", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pr-2">Password:</td>
                  <td>
                    <input
                      type="password"
                      value="*****"
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
          onClick={handleChangePassword}
        >
          Change Password
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditAccount;
