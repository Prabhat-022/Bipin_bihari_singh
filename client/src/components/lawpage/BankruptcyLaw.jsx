import React from 'react'

const BankruptcyLaw = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen px-4 lg:mx-20 md:mx-20 lg:w-full">
      <h1 className="text-3xl font-bold text-center mb-4 lg:mt-20 md:mt-20">Bankruptcy Law</h1>
      <div className=" rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Key Concepts of Bankruptcy Law</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Definition of Bankruptcy</li>
          <li className="mb-2">Purpose</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">To give debt relief to the debtor.</li>
            <li className="mb-2">To provide a fair distribution of the debtor’s assets among creditors.</li>
            <li className="mb-2">To allow economic fresh start to honest but unfortunate debtors.</li>
          </ul>
        </ul>
        <h2 className="text-xl font-bold mb-4">Types of Bankruptcy (India)</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Insolvency and Bankruptcy Code, 2016 (IBC)</li>
          <li className="mb-2">It applies to:</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Individuals</li>
            <li className="mb-2">Companies</li>
            <li className="mb-2">Limited liability partnerships (LLPs)</li>
            <li className="mb-2">Partnership firms</li>
          </ul>
        </ul>
        <h2 className="text-xl font-bold mb-4">For Companies</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">If a company cannot pay its debts, a Corporate Insolvency Resolution Process (CIRP) may be initiated.</li>
          <li className="mb-2">A resolution professional takes over the management.</li>
          <li className="mb-2">Creditors decide whether to revive the company or liquidate it.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">For Individuals</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">There are provisions for fresh start, insolvency resolution, and bankruptcy.</li>
          <li className="mb-2">A debtor may apply for relief, and a repayment plan may be proposed and approved.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">Who Can File for Bankruptcy?</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Debtor (self)</li>
          <li className="mb-2">Creditors</li>
          <li className="mb-2">Banks</li>
          <li className="mb-2">Employees (in case of companies)</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">Process Overview</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Filing application (by debtor or creditor)</li>
          <li className="mb-2">Admission by tribunal (NCLT for companies, DRT for individuals)</li>
          <li className="mb-2">Moratorium period (pause on all legal actions)</li>
          <li className="mb-2">Insolvency professional takes over</li>
          <li className="mb-2">Creditors committee formed</li>
          <li className="mb-2">Resolution plan or liquidation</li>
          <li className="mb-2">Discharge of debts</li>
        </ul>
      </div>
    </div>
  )
}

export default BankruptcyLaw