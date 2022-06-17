import React from 'react';
import '../styles/nav.css';

export default function Nav() {
  return (
    <div className='container'>
      <div className='nav-left'>
          <img src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1200&q=75' alt='img'/>
          <select className='select-container'>
            <option>Grocery</option>
            <option>Bags</option>
            <option>Bakery</option>
            <option>Daily Needs</option>
            <option>Clothing</option>
            <option>Furniture</option>
            <option>Makeup</option>
            <option>Books</option>
          </select>
      </div>
      <div className='nav-right'>
          <ul className='nav-elements'>
            <li>Shops</li>
            <li>Offers</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <div className='buttons'>
            <button className='btn1'>Become a Seller</button>
            <button className='btn2'>Join</button>
          </div>
      </div>
    </div>
  )
}

