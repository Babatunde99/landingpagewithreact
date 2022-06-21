import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import '../sass/style.css'

const Header = () => {
    const [isMobile, setMobile] = useState(false);

    const handleMobile = () => {
        setMobile((prev) => !prev);
    }
    console.log(isMobile);

    return (
        <div className='navBar alignment'>
            <div className='logo'>
                <h2>Corpers <span>lodge</span></h2>
            </div>
            <ul className={`${isMobile ? 'link' : 'ul'}`}>
                <li>Home</li>
                <li>Listing</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Login</li>
                <button>Sign Up</button>
            </ul>
            <span className='switcher' onClick={handleMobile}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </span>
        </div>
    )
}

export default Header
