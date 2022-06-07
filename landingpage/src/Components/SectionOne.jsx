import React from 'react'
import building from './../image/Group 312.png'

const SectionOne = () => {
    return (
        <div className='container alignment'>
            <div className='firstArea'>
                <h1>Find your perfect home <span>Anywhere</span></h1>
                <p>You may be relocating to a new place, anticipating your service year, or have been assigned to your Primary Place of Assignment.
                    Corpers Lodge is ready to help you find a comfortable and affordable place to stay.</p>
                <div className='buttonContainer'>
                    <button className='buttonOne'>Get Started</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div>
                <img src={building} alt="" />
            </div>
        </div>
    )
}

export default SectionOne

