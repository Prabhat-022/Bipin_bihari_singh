import React from 'react'

const FamilyLaw = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 md:mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">Family Law</h1>
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Key Areas of Family Law</h2>
        <ul className="list-disc pl-8">
          <li className="mb-2">Marriage</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Legal requirements for marriage</li>
            <li className="mb-2">Registration of marriage</li>
            <li className="mb-2">Valid vs. void marriages</li>
            <li className="mb-2">Inter-religious marriages (e.g., under the Special Marriage Act in India)</li>
          </ul>
          <li className="mb-2">Divorce</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Grounds for divorce (cruelty, adultery, desertion, etc.)</li>
            <li className="mb-2">Mutual consent divorce</li>
            <li className="mb-2">Judicial separation</li>
            <li className="mb-2">Divorce procedures and legal consequences</li>
          </ul>
          <li className="mb-2">Child Custody & Guardianship</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Who will take care of the child after divorce or separation</li>
            <li className="mb-2">Welfare of the child is the most important factor</li>
            <li className="mb-2">Custody can be joint or sole</li>
          </ul>
          <li className="mb-2">Maintenance/Alimony</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Financial support to spouse or children after separation or divorce</li>
            <li className="mb-2">Rights of wife/husband under different personal laws (Hindu, Muslim, Christian, etc.)</li>
            <li className="mb-2">Section 125 of CrPC provides maintenance regardless of religion</li>
          </ul>
          <li className="mb-2">Adoption</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Legal process to become the parent of a child</li>
            <li className="mb-2">Governed by:</li>
            <ul className="list-disc pl-4">
              <li className="mb-2">Hindu Adoption and Maintenance Act (HAMA), 1956</li>
              <li className="mb-2">Juvenile Justice (Care and Protection of Children) Act, for others</li>
            </ul>
          </ul>
          <li className="mb-2">Inheritance and Succession</li>
          <ul className="list-disc pl-4">
            <li className="mb-2">Distribution of property after death</li>
            <li className="mb-2">Different laws for Hindus (Hindu Succession Act), Muslims (personal law), Christians, etc.</li>
          </ul>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Types of Family Law in India</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Religion</th>
              <th className="px-4 py-2">Governing Law(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Hindu</td>
              <td className="px-4 py-2">Hindu Marriage Act, Hindu Succession Act, HAMA</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Muslim</td>
              <td className="px-4 py-2">Muslim Personal Law (Shariat) Application Act</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Christian</td>
              <td className="px-4 py-2">Indian Christian Marriage Act, Indian Divorce Act</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Parsi</td>
              <td className="px-4 py-2">Parsi Marriage and Divorce Act</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Inter-faith</td>
              <td className="px-4 py-2">Special Marriage Act, 1954</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-2xl font-bold mb-4">Why Family Law Is Important</h2>
        <ul className="list-disc pl-8">
          <li className="mb-2">Protects rights of spouses, children, and family members</li>
          <li className="mb-2">Ensures justice in domestic matters</li>
          <li className="mb-2">Promotes harmony and legal order in personal life</li>
        </ul>
      </div>
    </div>
  )
}

export default FamilyLaw
