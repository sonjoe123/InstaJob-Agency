import React from "react";

const UsernameForm = () => {
  return (
    <div>
      <label htmlFor="username" className="block text-sm mb-2 dark:text-white">
        Preferred Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        required
      />

    </div>
  );
};

export default UsernameForm;
