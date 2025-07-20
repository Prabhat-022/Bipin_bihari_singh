import React from 'react'
import mainImage from '../../assets/bipin3.jpg'
import mainImage2 from '../../assets/bipin1.jpg'
import Book_Appointment from '../appointment/Book_Appointment'
import { Link } from 'react-router-dom'
import PracticingArea from '../practicing_area/PracticingArea'

const Home = () => {
    return (

        <>
            <main>
                <section className='lg:mx-20 md:mx-20'>
                    <div className="h-[100vh]">
                        <img src={mainImage} alt="" className="w-[100%] h-[100%] object-cover relative" />
                        <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-xl font-bold">Meet all your investigative and litigation needs</h1>
                            <p className="text-sm text-gray-600 font-medium mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
                            <div className='lg:flex lg:gap-5 md:gap-5 lg:mt-5 md:mt-2'>
                                <button className="bg-blue-500 text-white px-5 py-2 rounded mb-2 lg:p-3 md:p-2"><Link to="/about">Read More</Link></button>

                                <button className="bg-transparent border-1 border-blue-500 text-black px-5  rounded hover:bg-gray-500 hover:text-white hover:border-blue-500 "><Link to="/contact">Contact Us</Link></button>
                            </div>
                        </div>

                    </div>

                </section>
                <section className='lg:mx-10 md:mx-20'>
                    <PracticingArea />
                </section>
                <section>

                </section>
                <section>
                <Book_Appointment />

                </section>

            </main>
        </>
    )
}

export default Home
