import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from 'react';


const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <>
            <nav className='flex justify-between items-center p-5 md:mx-20 sticky top-0 z-50 bg-gray-300 max-w-full '>
                <div className="flex items-center gap-2  font-bold text-3xl font-serif md:text-3xl md:font-serif md:flex md:gap-2 md:items-center">
                    <Link to="/" className='hover:text-blue-500 cursor-pointer flex items-center gap-2'>
                        <FaRegUserCircle />
                        Bipin Bihari Singh
                    </Link>
                </div>

                <div className='md:block hidden'>
                    <ul className='flex gap-5 text-xl font-serif'>
                        <Link to="/" className='hover:text-blue-500 cursor-pointer' onClick={toggleMenu}>Home</Link>
                        <Link to="/practicing-area" className='hover:text-blue-500 cursor-pointer' onClick={toggleMenu}>Practicing Area</Link>
                        <Link to="/services" className='hover:text-blue-500 cursor-pointer' onClick={toggleMenu}>Services</Link>
                        <Link to="/about" className='hover:text-blue-500 cursor-pointer' onClick={toggleMenu}>About</Link>
                        <Link to="/contact" className='hover:text-blue-500 cursor-pointer' onClick={toggleMenu}>Contact</Link>
                    </ul>
                </div>

                <div className={open ? `bg-gray-300 w-[300px] h-[100vh] fixed top-15 right-0 z-50 p-10` : `hidden`}>
                    <ul className='flex flex-col gap-5 text-xl font-serif items-center justify-center'>
                        <Link to="/" className='hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer' onClick={toggleMenu}>Home</Link>
                        <Link to="/practicing-area" className='hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer' onClick={toggleMenu}>Practicing Area</Link>
                        <Link to="/services" className='hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer' onClick={toggleMenu}>Services</Link>
                        <Link to="/about" className='hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer' onClick={toggleMenu}>About</Link>
                        <Link to="/contact" className='hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer' onClick={toggleMenu}>Contact</Link>
                    </ul>
                </div>

                <div className='md:hidden cursor-pointer'>
                    {open ? <GiCancel onClick={toggleMenu} className='text-2xl' /> : <GiHamburgerMenu onClick={toggleMenu} className='text-2xl' />}
                </div>


            </nav>
        </>
    )
}

export default Header
