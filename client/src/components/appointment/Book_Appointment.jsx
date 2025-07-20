import React from 'react'

const Book_Appointment = () => {
    return (
        <>
            <div className="flex flex-col lg:mx-20 md:mx-20  m-4 md:gap-5 md:mt-20 md:mb-20 md:flex-row  md:h-full">
                <div className="md:w-1/2 md:m-4">
                    <form action="" className='flex flex-col gap-5'>

                        <div className="flex justify-between gap-3">
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="" className=' mb-1 font-serif '>Name</label>
                                <input type="text" className='border-2 border-gray-300 h-13 px-2' placeholder='Enter Your Name' />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="" className='mb-1 font-serif'>Email</label>
                                <input type="email" className='border-2 border-gray-300 h-13 px-2' placeholder='Enter Your Email' />
                            </div>
                        </div>

                        <div className="flex justify-between gap-3">
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="" className='mb-1 font-serif'>Date</label>
                                <input type="date" className='border-2 border-gray-300 h-13 px-2' placeholder='Enter Your Date' />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="" className='mb-1 font-serif'>category(optional)</label>
                                <select name="" id="" className='border-2 border-gray-300 h-13 px-2'>
                                    <option value="">Family Law</option>
                                    <option value="">Criminal Law</option>
                                    <option value="">Personal Injury</option>
                                    <option value="">Business Law</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className='mb-1 font-serif'>Phone</label>
                            <input type="number" className='border-2 border-gray-300 h-13 px-2' placeholder='Enter Your Phone' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className='mb-1 font-serif'>Message</label>
                            <textarea name="" id="" cols="30" rows="10" className='border-2 border-gray-300 h-40 px-2 ' placeholder='Enter Your Message'></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded">Submit</button>
                    </form>

                </div>
                <div className="lg:w-2/3 md:w-1/2 md:mt-10" >
                    <h1 className="mb-1 font-serif mt-5">Appointment</h1>
                    <h1 className="text-4xl font-bold font-serif mt-4">Book an Appointment</h1>
                    <p className="text-xl font-medium font-serif mt-10">
                        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way
                    </p>

                    <p className="text-xl font-medium font-serif mt-10">
                        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Book_Appointment
