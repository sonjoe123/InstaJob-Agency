import React from "react";

const CompnanyForm = () => {
  return (
    <div>
      <form>
        <div className="grid gap-y-4">
          <div className="text-center">
            <label className="block text-xl font-bold mb-4 dark:text-white">Company Information</label>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">Company Name</label>
            <input type="text" id="firstName" name="firstName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="streetAddress" className="block text-sm mb-2 dark:text-white">Street Address</label>
              <input type="text" id="streetAddress" name="streetAddress" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm mb-2 dark:text-white">City</label>
              <input type="text" id="city" name="city" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm mb-2 dark:text-white">State</label>
              <input type="text" id="state" name="state" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm mb-2 dark:text-white">ZIP Code</label>
              <input type="text" id="zipCode" name="zipCode" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Preferred Username</label>
            <input type="tel" id="phone" name="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>

        </div>
      </form>
    </div>
  );
};

export default CompnanyForm;
