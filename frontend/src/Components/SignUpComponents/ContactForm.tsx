import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="grid gap-y-4">
          <div className="text-center">
            <label className="block text-xl font-bold mb-4 dark:text-white">Contact Information</label>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First Name</label>
            <input type="text" id="firstName" name="firstName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
          </div>

          <div>
            <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">Last Name</label>
            <input type="text" id="firstName" name="firstName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Phone</label>
            <input type="tel" id="phone" name="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email</label>
            <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
          </div>

        </div>
      </form>
    </div>
  );
};

export default ContactForm;
