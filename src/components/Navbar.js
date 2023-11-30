import React from 'react'
import './Nav.css'
export const Navbar = () => {
  return (
    <div className='nav'>
        <div className="icon">
            icon
        </div>
        <div>
            <img src="https://inshorts.com/dist/images/home_page/logo.png" 
            alt="News image"
            style={{
                cursor: 'pointer'
            }} />
        </div>
    </div>
  )
}
