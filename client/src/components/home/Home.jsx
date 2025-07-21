import React from 'react'
import mainImage from '../../assets/bipin3.jpg'
// import mainImage2 from '../../assets/bipin1.jpg'
import Book_Appointment from '../appointment/Book_Appointment'
import { Link } from 'react-router-dom'
import PracticingArea from '../practicing_area/PracticingArea'

const Home = () => {

    return (

        <>
            <main >
                <section className='lg:mx-20 md:mx-20'>
                    <div className="h-[100vh]">
                        <img src={mainImage} alt="" className="w-[100%] h-[100%] object-cover relative" />
                        <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-[60%]">


                            <h2 className='text-center font-serif mt-4 font-bold text-2xl'>🏛 Why Choose Me</h2>
                            <div className="lg:mx-20 md:mx-20 lg:flex lg:gap-5 md:gap-5 lg:mt-5 md:mt-2 flex flex-col items-center justify-center">
                                <p className='text-start font-serif mt-4'>🎓 Trained at Allahabad University – one of India’s premier institutions for legal education</p>

                                <p className='text-start font-serif mt-4'>📚 Strong academic background with a Master's in Law (LL.M)</p>

                                <p className='text-start font-serif mt-4'>🧠 Analytical thinker with a passion for justice and fair representation</p>

                                <p className='text-start font-serif mt-4'>💬 Clear, client-friendly cpmmunication in both English and Hindi</p>

                                <p className='text-start font-serif mt-4'>🤝 Committed to ethical practice and building long-term client trust</p>
                            </div>

                            <div className='lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-5 md:gap-5 lg:mt-5 md:mt-2 flex flex-col items-center justify-center'>

                                <button className="bg-sky-600 text-white px-5 py-2 rounded mb-2 lg:p-3 md:p-2 hover:bg-blue-500 hover:text-white "><Link to="/about">Read More</Link></button>

                                <button className="moving-border lg:p-3 bg-transparent border-1 border-blue-500 text-black px-5  rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 "><Link to="/contact">Make an Appointment</Link></button>
                            </div>
                        </div>

                    </div>

                </section>

                <section className='lg:mx-20 md:mx-20 bg-gray-50'>
                    <h1 className='text-center font-serif mt-4 font-bold text-2xl lg:mt-20 md:mt-20'>Areas of Practice</h1>
                    <PracticingArea />
                </section>

                <section className='lg:mx-20 md:mx-20 bg-gray-50'>
                    <h1 className='text-center font-serif mt-4 font-bold text-4xl pt-4 lg:mt-20 md:mt-20'>Book an Appointment</h1>
                    <Book_Appointment />

                </section>
            </main>
        </>
    )
}

export default Home
