import React from 'react'

const CriminalLaw = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8 md:p-8 bg-white lg:mx-20 md:mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">Criminal Law</h1>
      <p className="text-lg leading-relaxed mb-4 lg:mr-20 md:mr-20">Criminal Law is the branch of law that deals with crimes and their punishments. It defines offenses against the state or society, prescribes punishments, and lays down the procedure for investigation, trial, and judgment.</p>


      <h2 className="text-2xl font-bold mb-4">Definition of Criminal Law</h2>
      <p className="text-lg leading-relaxed mb-4">
        Criminal law is a body of law that:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">Identifies what conduct is a crime</li>
        <li className="mb-2">Prescribes punishment for those crimes</li>
        <li className="mb-2">Ensures justice is served to both the victim and society</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Key Elements of Criminal Law</h2>
      <ol className="list-decimal pl-8 mb-4">
        <li className="mb-2">Crime</li>
        <li className="mb-2">Important Concepts</li>
        <ul className="list-disc pl-4">
          <li className="mb-2">Mens Rea (Guilty Mind) – Intention or knowledge of wrongdoing</li>
          <li className="mb-2">Actus Reus (Guilty Act) – The actual act of committing the crime</li>
          <li className="mb-2">Burden of Proof – On the prosecution, beyond a reasonable doubt</li>
          <li className="mb-2">Presumption of Innocence – The accused is innocent until proven guilty</li>
        </ul>
      </ol>

      <h2 className="text-2xl font-bold mb-4">Types of Criminal Offenses</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Bailable Offense</td>
            <td className="border px-4 py-2">Minor crimes (e.g. public nuisance, simple hurt) – bail is a right</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Non-Bailable Offense</td>
            <td className="border px-4 py-2">Serious crimes (e.g. murder, rape, kidnapping) – bail is not guaranteed</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Cognizable Offense</td>
            <td className="border px-4 py-2">Police can arrest without warrant (e.g. murder, theft)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Non-Cognizable Offense</td>
            <td className="border px-4 py-2">Police need court permission to investigate (e.g. defamation, cheating)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Major Criminal Laws in India</h2>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">Bharatiya Nyaya Sanhita (BNS), 2023</li>
        <ul className="list-disc pl-4">
          <li className="mb-2">Replaces the Indian Penal Code, 1860</li>
          <li className="mb-2">Defines crimes like murder, theft, rape, assault</li>
          <li className="mb-2">Sets out punishments for each offense</li>
        </ul>
        <li className="mb-2">Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</li>
        <ul className="list-disc pl-4">
          <li className="mb-2">Replaces the Criminal Procedure Code, CrPC</li>
          <li className="mb-2">Provides the procedure for arrest, investigation, trial, bail, etc.</li>
        </ul>
        <li className="mb-2">Bharatiya Sakshya Adhiniyam (BSA), 2023</li>
        <ul className="list-disc pl-4">
          <li className="mb-2">Replaces the Indian Evidence Act</li>
          <li className="mb-2">Rules for what kind of evidence can be used in court</li>
        </ul>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Special Criminal Laws</h2>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">NDPS Act (for drug-related crimes)</li>
        <li className="mb-2">POCSO Act (for protection of children from sexual offenses)</li>
        <li className="mb-2">Prevention of Corruption Act</li>
        <li className="mb-2">UAPA (for anti-terror laws)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Stages of a Criminal Case</h2>
      <ol className="list-decimal pl-8 mb-4">
        <li className="mb-2">Filing of FIR</li>
        <li className="mb-2">Investigation by police</li>
        <li className="mb-2">Charge sheet filed</li>
        <li className="mb-2">Trial in court</li>
        <li className="mb-2">Judgment (acquittal or conviction)</li>
        <li className="mb-2">Appeal (if applicable)</li>
      </ol>

      <h2 className="text-2xl font-bold mb-4">Why Criminal Law is Important</h2>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">Maintains law and order in society</li>
        <li className="mb-2">Protects individual rights</li>
        <li className="mb-2">Deterrence against unlawful behavior</li>
        <li className="mb-2">Ensures justice to victims</li>
      </ul>
    </div>
  )
}

export default CriminalLaw
