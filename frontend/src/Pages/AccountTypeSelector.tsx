import React from 'react'
import AccountSelectorCard from '../Components/AccountSelectorCard/AccountSelectorCard.tsx'

const AccountTypeSelector = () => {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
        <AccountSelectorCard accountType="Professional"/>
        <AccountSelectorCard accountType="Employer" />
    </div>
  )
}

export default AccountTypeSelector