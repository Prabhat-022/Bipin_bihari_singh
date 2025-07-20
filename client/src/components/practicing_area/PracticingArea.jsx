import React from 'react';
import Cart from '../cart/Cart';

const PracticingArea = () => {
  return (
    <div className='lg:mx-20 md:mx-20 lg:flex lg:flex-wrap lg:gap-5 lg:items-center lg:justify-center md:flex md:flex-wrap md:gap-5 md:items-center md:justify-center'>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  )
}

export default PracticingArea
