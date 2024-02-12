import React from "react";
// import CreateJobForm from "./CreateJobForm";

// const jobForm = () => {
//   return <CreateJobForm/>
// }

const CreateJob = ({ onComponentChange }) => {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 min-h-full w-full flex flex-col items-center py-25" style = {{height: '200px', overflow: 'scroll'}}>
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-left">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Create a Job Posting</h1>
        <form className="flex max-w-full flex-col gap-4">
          <div className="grid gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
            <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Job Title</h1>
              <input type="text" id="jobTitle" name="jobTitle" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
            <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Job ID</h1>
              <input type="text" id="uniqueId" name="uniqueId" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Contact Information</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First Name</label>
              <input type="text" id="firstName" name="firstName" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">Last Name</label>
              <input type="text" id="lastName" name="lastName" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Phone Number</label>
              <input type="tel" id="phone" name="phone" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email</label>
              <input type="text" id="email" name="email" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
          </div>

          <div>
              <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Duration</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm mb-2 dark:text-white">Start Date</label>
            <input type="date" id="startDate" name="startDate" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm mb-2 dark:text-white">End Date</label>
            <input type="date" id="endDate" name="endDate" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          </div>
          <div>
          <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Hourly Rate</h1>
            <input type="dollar" id="hourlyRate" name="hourlyRate" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          <div>
              <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Work Hours</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startTime" className="block text-sm mb-2 dark:text-white">Start Time</label>
            <input type="time" id="startTime" name="startTime" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          <div>
            <label htmlFor="endTime" className="block text-sm mb-2 dark:text-white">End Time</label>
            <input type="time" id="endTime" name="endTime" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          </div>

          <div>
          <h1 className="block text-1xl font-bold text-gray-800 dark:text-white">Qualifications</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm mb-2 dark:text-white">Categories</label>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
              <input type="text" id="category1" name="category1" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              <input type="text" id="category2" name="category2" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              <input type="text" id="category3" name="category3" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              <input type="text" id="category4" name="category4" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
            </div>
          </div>
          <div>
            <label htmlFor="keyWords" className="block text-sm mb-2 dark:text-white">Keywords</label>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
              <input type="text" id="keyWords1" name="keyWords1" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              <input type="text" id="keyWords2" name="keyWords2" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              <input type="text" id="keyWords3" name="keyWords3" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              <input type="text" id="keyWords4" name="keyWords4" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
            </div>
          </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm mb-2 dark:text-white">Description</label>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
              <textarea id="description" name="description" style={{border: '1px solid rgba(0, 0, 0, 0.25)'}} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
              </div>
          </div>
          <button
            onClick={() => onComponentChange('CurrentJobs')}
            style={{float: 'right'}}
            className="w-full max-w-sm py-2 px-4 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-gray-800 hover:bg-blue-200"
            >
            Submit
          </button>
        </div>
        </form>
            </div>
        </div>
      </div>
    </main>
  </div>
  );
};

export default CreateJob;
