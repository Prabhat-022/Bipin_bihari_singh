import React from 'react'
import bipin1 from '../../assets/bipin1.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="m-4 lg:flex lg:gap-5 lg:mx-20 md:mx-20">
        <div className="lg:w-1/2 md:w-1/2">
          <img src={bipin1} className='w-full h-full object-cover rounded-full border-2 border-black lg:rounded-tl-lg md:rounded-tl-lg' alt="" />

        </div>

        <div className="lg:w-1/2 md:w-1/2 mt-12">
          <h1 className="text-center font-serif text-2xl">Bipin Bihari Singh</h1>
          <p className="text-center font-serif text-xl">Advocate</p>

          <p className='text-center font-serif mt-4'>I am a dedicated and passionate legal professional, having successfully completed my BA LL.B and LL.M from the prestigious University of Allahabad. With a strong academic foundation and a commitment to justice, I am now stepping into active legal practice with the goal of becoming a trusted, skilled, and ethical lawyer. </p>

          <p className='text-center font-serif mt-4'>During my studies, I honed my legal acumen in areas such as constitutional law, civil and criminal litigation, contract law, and legal research. I believe that the law is not just a profession — it is a responsibility. My mission is to serve clients with integrity, diligence, and clarity, ensuring that every case I take is pursued with full commitment and strategy.</p>

          <p className='text-center font-serif mt-4'>What sets me apart is my sharp reasoning, clear communication, and empathetic approach. I understand that behind every legal matter is a human story — and I’m here to protect your rights and advocate for your interests with full sincerity.</p>




          <h2 className='text-center font-serif mt-4 font-bold'>🏛 Why Choose Me</h2>
          <p className='text-start font-serif mt-4'>🎓 Trained at Allahabad University – one of India’s premier institutions for legal education</p>

          <p className='text-start font-serif mt-4'>📚 Strong academic background with a Master's in Law (LL.M)</p>

          <p className='text-start font-serif mt-4'>🧠 Analytical thinker with a passion for justice and fair representation</p>

          <p className='text-start font-serif mt-4'>💬 Clear, client-friendly cpmmunication in both English and Hindi</p>

          <p className='text-start font-serif mt-4'>🤝 Committed to ethical practice and building long-term client trust</p>


          <h2 className='text-center font-serif mt-4 font-bold'>🔍 Areas of Interest</h2>
          <div className="lg:mx-20 md:mx-20">
            <p className='text-start font-serif mt-4'>Civil & Criminal Litigation</p>

            <p className='text-start font-serif mt-4'>Property and Land Disputes</p>

            <p className='text-start font-serif mt-4'>Family & Matrimonial Law</p>

            <p className='text-start font-serif mt-4'>Constitutional Matters</p>

            <p className='text-start font-serif mt-4'>Legal Drafting & Research</p>
          </div>


          <div className="flex gap-5 justify-center mt-5">
            <button className="moving-border bg-transparent hover:bg-blue-500 hover:text-white border-2  border-blue-500 text-black px-5 py-2 rounded hover:border-blue-500"> <Link to="/contact">Contact Us</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
