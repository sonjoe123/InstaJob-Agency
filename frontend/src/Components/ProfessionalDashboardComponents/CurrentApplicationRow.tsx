import React from 'react'

const CurrentApplicationRow = () => {
  return (
    
    <tbody className="min-w-full divide-y divide-gray-700">
              <tr>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="ps-6 py-3">
                  </div>
                </td>

                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-600">Fullstack Developer</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <div className="flex items-center gap-x-2">
                      <div className="grow">
                        <span className="text-sm text-gray-600">Company A</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                <div className="px-6 py-3">
                    <div className="flex items-center gap-x-2">
                      <div className="grow">
                        <span className="text-sm text-gray-600">$50</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                      <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Accepted
                    </span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-600">22 January, 2024</span>
                  </div>
                </td>
              </tr>
              
            </tbody>
  )
}

export default CurrentApplicationRow