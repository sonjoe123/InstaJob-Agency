import React from "react";

const DegreeForm = () => {
  return (
    <div>
      <form>
        <div className="grid gap-y-4">
          <div className="text-center">
            <label className="block text-xl font-bold mb-4 dark:text-white">
              Professional Experience
            </label>
          </div>
          <div>
            <label
              htmlFor="institutionName"
              className="block text-sm mb-2 dark:text-white"
            >
              Name of Institution
            </label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="degreeName"
              className="block text-sm mb-2 dark:text-white"
            >
              Name of Degree
            </label>
            <input
              type="text"
              id="degreeName"
              name="degreeName"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="completionDate"
              className="block text-sm mb-2 dark:text-white"
            >
              Month/Year of Completion
            </label>
            <input
              type="month"
              id="completionDate"
              name="completionDate"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              required
            />
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Keywords/Key phrases
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">Languages</td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      name="languages"
                      className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">Tools</td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      name="tools"
                      className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">Database</td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      name="database"
                      className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DegreeForm;
