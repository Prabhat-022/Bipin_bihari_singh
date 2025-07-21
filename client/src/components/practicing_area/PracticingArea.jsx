import React from 'react';
import Cart from '../cart/Cart';
import { cartdata } from './data';

console.log("cartdata",cartdata);

const PracticingArea = () => {
  return (
    <div className='lg:mx-20 md:mx-20 lg:flex lg:flex-wrap lg:gap-5 lg:items-center lg:justify-center md:flex md:flex-wrap md:gap-5 md:items-center md:justify-center'>
      {
        cartdata.map((item) => {
           return <Cart key={item.id} title={item.title} description={item.description} button={item.button} button2={item.button2} Links={item.Link}/>
        })
      }
    </div>
  )
}

export default PracticingArea
