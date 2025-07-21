import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="max-w-full lg:mx-20 md:mx-20 md:flex md:flex-col md:justify-between p-5 bg-gray-300">

            <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:  lg:mx-20 lg:mt-20 lg:justify-between">

                <div className="flex flex-col text-center gap-2 mb-4 md:flex md:flex-col md:justify-between md:items-center">
                    <h1 className='font-serif text-2xl underline font-semibold '>CONTACT</h1>
                    <p>+91 9631011429</p>
                    <p>+91 2273897785</p>
                    <p>bipinb2210@gmail.com</p>
                    <p>Kaimur(Bhabua) Bihar, India</p>
                </div>

                <div className="flex h-full gap-5 mb-4 md:flex md:flex-col md:justify-between">
                    <div>
                        <h1 className='font-serif text-2xl underline font-semibold text-center'>SOURCES</h1>
                        <div className="flex gap-5">
                            <ul className='flex gap-3 flex-col items-center justify-center'>
                                <Link to="/about" className='hover:text-blue-500 hover:underline cursor-pointer'>About us</Link>
                                <Link to="/services" className='hover:text-blue-500 hover:underline cursor-pointer'>Services</Link>
                                <Link to="/vision" className='hover:text-blue-500 hover:underline cursor-pointer'>Vision</Link>
                                <Link to="/mission" className='hover:text-blue-500 hover:underline cursor-pointer'>Mission</Link>
                                <Link to="/terms" className='hover:text-blue-500 hover:underline cursor-pointer'>Terms</Link>
                                <Link to="/privacy" className='hover:text-blue-500 hover:underline cursor-pointer'>Privacy</Link>
                            </ul>

                            <ul className='flex gap-3 flex-col items-center justify-center '>
                                <Link to="/partners" className='hover:text-blue-500 hover:underline cursor-pointer'>Partners</Link>
                                <Link to="/business" className='hover:text-blue-500 hover:underline cursor-pointer'>Business</Link>
                                <Link to="/careers" className='hover:text-blue-500 hover:underline cursor-poLiter'>Careers</Link>
                                <Link to="/blog" className='hover:text-blue-500 hover:underline cursor-pointer'>Blog</Link>
                                <Link to="/faq" className='hover:text-blue-500 hover:underline cursor-pointer'>FAQ</Link>
                                <Link to="/creative" className='hover:text-blue-500 cursor-pointer'>Creative</Link>
                            </ul>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='font-serif text-2xl underline font-semibold text-center mb-3'>QUICK LINKS</h1>
                        <ul className='flex gap-5 flex-col items-center justify-center'>
                            <Link to="/vision" className='hover:text-blue-500 hover:underline cursor-pointer'>Our Vision</Link>
                            <Link to="/about" className='hover:text-blue-500 hover:underline cursor-pointer'>About us</Link>
                            <Link to="/contact" className='hover:text-blue-500 hover:underline cursor-pointer'>Contact us</Link>
                        </ul>

                        <div className='flex gap-5 mt-5'>
                            <p className='text-2xl hover:text-blue-500 cursor-pointer'><FaFacebook /></p>
                            <p className='text-2xl hover:text-blue-500 cursor-pointer'><FaTwitter /></p>
                            <p className='text-2xl hover:text-blue-500 cursor-pointer'><FaInstagram /></p>
                            <p className='text-2xl hover:text-blue-500 cursor-pointer'><FaYoutube /></p>
                            <p className='text-2xl hover:text-blue-500 cursor-pointer'><FaLinkedin /></p>
                        </div>
                </div>

            </div>
            <div className='text-sm font-serif mt-10 text-center'>
                <p>Copyright ©2025 All rights reserved | <Link to="/" className='hover:text-blue-500 cursor-pointer underline'>Bipin Bihari Singh</Link></p>
            </div>
        </footer>
    )
}

export default Footer
