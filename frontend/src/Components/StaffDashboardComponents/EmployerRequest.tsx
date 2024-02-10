import React, { useState } from "react";

type Employer = {
  id: number;
  name: string;
  username: string;
  contactInformation: string;
  companyAddress: string;
};

const employers: Employer[] = [
  {
    id: 1,
    name: "employer A",
    username: "employer A",
    contactInformation: "employerA@gmail.com",
    companyAddress: "example_company_address",
  },
  {
    id: 2,
    name: "employer B",
    username: "employer B",
    contactInformation: "employerB@gmail.com",
    companyAddress: "example_company_address2",
  },
  {
    id: 3,
    name: "employer C",
    username: "employer C",
    contactInformation: "employerC@gmail.com",
    companyAddress: "example_company_address3",
  },
  {
    id: 4,
    name: "employer D",
    username: "employer D",
    contactInformation: "employerD@gmail.com",
    companyAddress: "example_company_address4",
  },
  {
    id: 5,
    name: "employer E",
    username: "employer E",
    contactInformation: "employerE@gmail.com",
    companyAddress: "example_company_address5",
  },
  {
    id: 6,
    name: "employer F",
    username: "employer F",
    contactInformation: "employerF@gmail.com",
    companyAddress: "example_company_address6",
  },
  {
    id: 7,
    name: "employer G",
    username: "employer G",
    contactInformation: "employerG@gmail.com",
    companyAddress: "example_company_address7",
  },
  {
    id: 8,
    name: "employer H",
    username: "employer H",
    contactInformation: "employerH@gmail.com",
    companyAddress: "example_company_address8",
  },
  {
    id: 9,
    name: "employer I",
    username: "employer I",
    contactInformation: "employerI@gmail.com",
    companyAddress: "example_company_address9",
  },
  {
    id: 10,
    name: "employer J",
    username: "employer J",
    contactInformation: "employerJ@gmail.com",
    companyAddress: "example_company_address10",
  },
];

const EmployerRequest = () => {
  const [currentEmployerIndex, setCurrentEmployerIndex] = useState(0);
  const [message, setMessage] = useState("");

  const currentEmployer = employers[currentEmployerIndex];

  const handleAccept = () => {
    setMessage("Employer successfully accepted.");
    setTimeout(() => {
      setMessage("");
      if (currentEmployerIndex < employers.length - 1) {
        setCurrentEmployerIndex(currentEmployerIndex + 1);
      } else {
        setCurrentEmployerIndex(0);
      }
    }, 2000);
  };

  const handleDecline = () => {
    setMessage("Employer successfully declined.");
    setTimeout(() => {
      setMessage("");
      if (currentEmployerIndex < employers.length - 1) {
        setCurrentEmployerIndex(currentEmployerIndex + 1);
      } else {
        setCurrentEmployerIndex(0);
      }
    }, 2000);
  };

  return (
    <div className="container h-screen flex justify-center items-start">
      {currentEmployer && (
        <div className="employer-info text-center">
          <table>
            <tbody>
              <tr>
                <td className="p-3">Username:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.username}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Contact Information:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.contactInformation}
                    readOnly
                    className="w-full p-2 bg-gray-200"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Company Address:</td>
                <td>
                  <textarea
                    value={currentEmployer.companyAddress}
                    readOnly
                    className="w-full p-2 bg-gray-200 resize-none"
                    rows={2}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-container mt-4">
            <button onClick={handleAccept} className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4">
              Accept
            </button>
            <button onClick={handleDecline} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Decline
            </button>
          </div>
          {message && <p className="font-bold mt-4 message">{message}</p>}
        </div>
      )}
    </div>
  );
};


export default EmployerRequest;
