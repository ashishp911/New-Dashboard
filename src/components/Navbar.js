import React from 'react'
import './Nav.css'
import HamburgerDrawer from './HamburgerDrawer'
export const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className="icon">
            <HamburgerDrawer setCategory = {setCategory} />
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
