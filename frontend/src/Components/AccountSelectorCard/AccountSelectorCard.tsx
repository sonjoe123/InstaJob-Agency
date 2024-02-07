import React from 'react'

const AccountSelectorCard = ({accountType}) => {
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{accountType}</h1>

          </div>

          <div className="mt-5">
         <img src={accountType === "Professional" ? "https://cdn.mos.cms.futurecdn.net/Rvu47br3EoaSrWTbdqFc3b.jpg" : "https://4236008.fs1.hubspotusercontent-na1.net/hub/4236008/hubfs/iStock-1152447561.jpeg?width=858&name=iStock-1152447561.jpeg"} alt="account type" className="w-full h-48 object-cover object-center" />
        
          <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">

                {accountType === "Professional" ? "For professional seeking to be hired for job opportunities and contracts" : "For employers and businesses looking to higher professionals"}
        
          </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AccountSelectorCard