import React from 'react';
import Locations from './Locations';

function SectionFour() {
    return (
        <div className='alignment SectionFour'>
            {/* <div className='holder'> */}
            <h1>Corpers Lodge</h1>
            <h3>Looking for Corpers Lodge in your community</h3>

            <div className="images">
                {Locations.map(location => (
                    <div className='img' key={location.Id}>
                        <img src={location.image} alt="" />
                    </div>
                ))}
            </div>

        </div>

    )
}
export default SectionFour;
