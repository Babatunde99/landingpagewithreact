import React from 'react';
import recommendations from './Recommendations';


function SectionThree() {
    return (
        <div className='sectionThree alignment'>
            <h1>Recommendation for you</h1>
            <div className='recListContainer'>
                {recommendations.map(recommendation => (
                    <div key={recommendation.Id}>
                        <div>
                            <img src={recommendation.img} alt="#" className='topImg' />
                        </div>
                        <div className='card'>
                            <h3>{recommendation.title}</h3>
                            <h5>{recommendation.location}</h5>
                            <div className='optionList'>
                                {recommendation.items.map((item, index) => (
                                    <div className='options' key={index}>
                                        <img src={item.image} alt="#" />
                                        <span>{item.span}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='optionList'>
                                {recommendation.items2.map((item, index) => (
                                    <div className='options' key={index}>
                                        <img src={item.image} alt="#" />
                                        <span>{item.span}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='lastLine'>
                                <p>{recommendation.price}/Night</p>
                                <button>View Availability</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="see">
                <button className='seeMore'>See More</button>
                </div>
        </div>

    )
}

export default SectionThree
