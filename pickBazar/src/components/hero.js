import React from 'react';
import '../styles/hero.css';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { searchProducts} from "../redux/products";




export default function Hero() {
  const dispatch=useDispatch();
  const searchRef = useRef()
  const search = (e) => {
    if(searchRef.current.value.length > 2) {
        dispatch(searchProducts({searchTerm:searchRef.current.value}))
    }
}
  return (
    <div className='container1'>
        <div className='content'>
        <h1 className='heading'>Get Your Bakery Items Delivered</h1>
        <p className='text'>Get your favorite bakery items baked and delivered to your doorsteps at any time</p>
        <div className='search'>
          <input className='input' type="text" placeholder='Search your products from here' ref={searchRef}/>
          <button className='btn' onClick={search}>Search</button>
        </div>
        </div>
    </div>
  )
}
