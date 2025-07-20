import React from 'react'
import bipin1 from '../../assets/bipin1.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="m-4">
        <div className="">
          <img src={bipin1} className='w-full h-full object-cover rounded-full border-2 border-black ' alt="" />

        </div>

        <div className="mt-12">
          <h1 className="text-center font-serif text-2xl">Bipin Bihari Singh</h1>
          <p className="text-center font-serif text-xl">Advocate</p>

          <p className='text-center font-serif mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequuntur corrupti animi consequatur nobis voluptate qui voluptatem in molestias, rem laborum est id omnis consectetur repellat alias incidunt? Qui, cum?</p>

          <p className='text-center font-serif mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

          <div className="flex gap-5 justify-center mt-5">
            <button className="bg-transparent hover:bg-blue-500 hover:text-white border-2  border-blue-500 text-black px-5 py-2 rounded hover:border-blue-500"> <Link to="/contact">Contact Us</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
