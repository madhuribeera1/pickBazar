import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetails() {
    const location = useLocation()
  return (
    <div>
        <img src={location.state.image.original} alt="img" />
         <br />
        {location.state.name} <br />
        {location.state.description}
    </div>
  )
}
