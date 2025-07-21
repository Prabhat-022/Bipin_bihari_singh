import React from 'react'

const BusinessLaw = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 md:mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">Business Law</h1>
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">What is Business Law?</h2>
        <p className="mb-4">
          Business Law (also called Commercial Law or Corporate Law) is the branch of law that governs how businesses operate. It covers all the rules, rights, and regulations that apply to people and companies engaged in commerce, trade, and sales.
        </p>
        <h2 className="text-2xl font-bold mb-4">Key Areas of Business Law</h2>
        <ol className="list-decimal pl-8">
          <li className="mb-2">Formation of Business</li>
          <li className="mb-2">Contract Law</li>
          <li className="mb-2">Company Law</li>
          <li className="mb-2">Partnership Law</li>
          <li className="mb-2">Sale of Goods</li>
          <li className="mb-2">Negotiable Instruments</li>
          <li className="mb-2">Consumer Protection</li>
          <li className="mb-2">Intellectual Property Rights (IPR)</li>
          <li className="mb-2">Employment and Labor Laws</li>
          <li className="mb-2">Taxation</li>
          <li className="mb-2">Bankruptcy and Insolvency</li>
        </ol>
        <h2 className="text-2xl font-bold mb-4">Important Acts in Indian Business Law</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Act</th>
              <th className="px-4 py-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Companies Act, 2013</td>
              <td className="border px-4 py-2">Regulates companies in India</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Indian Contract Act, 1872</td>
              <td className="border px-4 py-2">Governs contracts</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sale of Goods Act, 1930</td>
              <td className="border px-4 py-2">Sale-related transactions</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Partnership Act, 1932</td>
              <td className="border px-4 py-2">Regulates partnerships</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">GST Act, 2017</td>
              <td className="border px-4 py-2">Goods & Services Tax laws</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Negotiable Instruments Act, 1881</td>
              <td className="border px-4 py-2">Cheques & promissory notes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Consumer Protection Act, 2019</td>
              <td className="border px-4 py-2">Protects consumers</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-2xl font-bold mb-4">Why Business Law Matters</h2>
        <ul className="list-disc pl-8">
          <li className="mb-2">Ensures fair and legal conduct in the market</li>
          <li className="mb-2">Protects investors, consumers, and businesses</li>
          <li className="mb-2">Provides dispute resolution framework</li>
          <li className="mb-2">Encourages safe and structured economic growth</li>
        </ul>
      </div>
    </div>
  )
}

export default BusinessLaw
