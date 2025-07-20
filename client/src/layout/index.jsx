import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const index = () => {
    return (
        <div className=''>
            <Header />
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default index
