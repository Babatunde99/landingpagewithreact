import React from 'react'
import style from '../sass/style.css'

const Header = () => {
    return (
        <div className='navBar alignment'>
            <div className='logo'>
                <h2>Corpers <span>lodge</span></h2>
            </div>
            <ul>
                <li>Home</li>
                <li>Listing</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Login</li>
            <button>Sign Up</button>
            </ul>
        </div>
    )
}

export default Header
