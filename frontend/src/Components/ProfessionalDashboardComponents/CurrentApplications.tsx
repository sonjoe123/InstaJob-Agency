import React from "react";
import CurrentApplicationRow from "./CurrentApplicationRow.tsx";

const CurrentApplications = () => {
  return (
 
    <div className="flex flex-col items-center mt min-h-screen w-full">
        <label className="mt-5 block text-2xl font-bold mb-4">Current Applications</label>
        <div className="w-full ml-20 max-w-6xl overflow-x-auto">
        <div className="m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-900">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start"></th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Posistion
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Company Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Pay Per Hour
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Date Applied
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
                <CurrentApplicationRow />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentApplications;
