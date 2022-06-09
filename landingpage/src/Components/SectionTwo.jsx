import React from 'react'
import overlay from './../image/sec2img.png'

function SectionTwo() {
    return (
        <div className='alignment sectionTwo'>
            <div>
                <img src={overlay} alt="" />
            </div>
            <div className='textDiv'>
                <h1>Enjoy Luxury Apartment at Affordable Prices</h1>
                <p>Hello Corper,You don't have to be concerned about finding an apartment; we can assist you in finding a comfortable accommodation without breaking the bank.</p>
                <div className='buttonHolder'>
                    <button>View Appartment</button>
                    <button>Check Apartment</button>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
