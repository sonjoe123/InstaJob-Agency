import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Professional = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  mailingAddress: string;
  degreeDetails: string;
  qualifications: {
    category: string;
    keywords: string[];
  }[];
  description: string;
};

const professionals: Professional[] = [
  {
    id: 3,
    fullName: "David Johnson",
    description: "Total Payments: $60,000 | Pending Payments: $12,000",
    username: "professional_c",
    email: "professional_c@gmail.com",
    phone: "(345) 678-9012",
    mailingAddress: "123 Professional Lane, City, Country",
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

  const handleProfessionalClick = (professional: Professional) => {
    setSelectedProfessional(professional);
  };

  const handleInputChange = (field: keyof Professional, value: string) => {
    if (selectedProfessional) {
      setSelectedProfessional({ ...selectedProfessional, [field]: value });
    }
  };
  const handleInputChange2 = (
    field: keyof Professional,
    value: string,
    qualificationIndex: number,
    keywordIndex: number
  ) => {
    if (selectedProfessional) {
      // Create a copy of the selectedProfessional object
      const updatedProfessional = { ...selectedProfessional };
      // Update the value of the specified keyword within the specified qualification
      updatedProfessional.qualifications[qualificationIndex].keywords[
        keywordIndex
      ] = value;
      // Set the updatedProfessional object as the new selectedProfessional
      setSelectedProfessional(updatedProfessional);
    }
  };
  const handleChangePassword = () => {
    navigate("/changepasswordprofessional");
  };
  const handleSave = () => {
    if (!selectedProfessional) {
      console.log("Selected Professional is null. Exiting.");
      return;
    }

    const { fullName, email, phone, mailingAddress, qualifications } =
      selectedProfessional;

    if (!fullName.trim()) {
      alert("Full Name cannot be empty");
      return;
    }
    if (!email.trim().match(/^[\w-]+(\.[\w-]+)*@gmail\.com$/)) {
      alert(
        "Email address must be in the correct format (e.g., example@gmail.com)"
      );
      return;
    }
    if (!phone.trim().match(/^\(\d{3}\) \d{3}-\d{4}$/)) {
      alert("Phone number must be in the format (XXX) XXX-XXXX");
      return;
    }
    if (!mailingAddress.trim()) {
      alert("Mailing Address cannot be empty");
      return;
    }
    if (
      qualifications.some(
        (qualification) => qualification.keywords.length === 0
      )
    ) {
      alert("Qualifications cannot be empty");
      return;
    }

    // If all validations pass, you can proceed to save the changes
    alert("Saving changes...");

    // You can navigate to another page here after saving
    // navigate("/some-page");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 mx-auto ">
        {selectedProfessional && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {selectedProfessional.fullName}
            </h2>
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
                  <td className="pr-2">Full Name:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
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
                      value={selectedProfessional.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Phone:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Mailing Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.mailingAddress}
                      onChange={(e) =>
                        handleInputChange("mailingAddress", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleInputChange("degreeDetails", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Qualifications:</td>
                  <td>
                    <ul className="text-left">
                      {selectedProfessional.qualifications.map(
                        (qualification, qualificationIndex) => (
                          <li key={qualificationIndex}>
                            <strong>{qualification.category}:</strong>{" "}
                            {/* Map through keywords and render input fields */}
                            {qualification.keywords.map(
                              (keyword, keywordIndex) => (
                                <input
                                  key={keywordIndex}
                                  type="text"
                                  value={keyword}
                                  onChange={(e) =>
                                    handleInputChange2(
                                      "qualifications",
                                      e.target.value,
                                      qualificationIndex,
                                      keywordIndex
                                    )
                                  }
                                  className="w-full p-2 bg-gray-200"
                                />
                              )
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Description:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
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
          Delete Account
        </button>
      </div>
    </div>
  );
};
export default EditAccount;
