import React from 'react'
import { CiBank } from "react-icons/ci";
import { Link } from 'react-router-dom';        

const Cart = ({title,description,button,button2,Links}) => {
    return (
        <>
            <div className=" h-full flex flex-col  p-4 m-4">

                <div className="w-full h-full shadow-md p-4">

                    <div className="flex items-center justify-center">

                        <CiBank className='text-4xl font-bold text-blue-500 ' size={50} />
                    </div>

                    <h1 className='font-bold font-serif text-2xl text-center'>{title}</h1>

                    <p>{description}</p>

                    <div className="flex items-center justify-center">

                        <button className='bg-blue-500 text-white text-sm px-5 py-1 rounded hover:bg-gray-500 hover:text-white hover:border-blue-500 mx-2 my-2'>    <Link to={Links}>{button}</Link></button>

                        <button className='bg-transparent border-2 border-blue-500 text-black text-sm px-5 py-1 rounded hover:bg-gray-500 hover:text-white hover:border-blue-500'><Link to={Links}>{button2}</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart
