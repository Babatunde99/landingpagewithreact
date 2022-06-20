import React from 'react';
import logo from './../image/Corpers lodge.png'
import fb from './../image/facebuuk.png'
import twit from './../image/twittterr.png'
import inst from './../image/insta.png'
import lind from './../image/linkediinn.png'

function Footer() {
  return (
    <div className='footer alignment'>
      <div>
          <img className='mainlogo' src={logo} alt="logo" />
      </div>
      <div>
          <h4>Useful Link</h4>
          <ul>
              <li>Product Categories</li>
              <li>Special Offer</li>
              <li>Advertise here</li>
          </ul>
      </div>
      <div>
          <h4>Information</h4>
          <ul>
              <li>About us</li>
              <li>Career</li>
              <li>Office</li>
          </ul>
      </div>
      <div>
          <h4>Support</h4>
          <ul>
              <li>FAQS</li>
              <li>Support Center</li>
              <li>Customer Care</li>
          </ul>
      </div>
      <div>
        <img className='imgmedia' src={fb} alt="fb" />
        <img className='imgmedia'src={twit} alt="#" />
        <img className='imgmedia'src={inst} alt="ig" />
        <img className='imgmedia'src={lind} alt="in" />
        <p>No 16, Jire Aradi Street, </p>
        <p>Orogun, Abeokuta.</p>
      </div>
    </div>
  )
}

export default Footer;
