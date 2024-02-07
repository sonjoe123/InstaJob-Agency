import React from 'react';
import DegreeForm from '../Components/SignUpComponents/DegreeForm.tsx';

const SignUp = () => {
  return (
    <body className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../signin">
                  &nbsp;Sign in here
                </a>
              </p>
            </div>
            <div className="mt-3">
              <DegreeForm />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default SignUp;
