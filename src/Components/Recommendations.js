import blu from './../image/radison blue.png'
import bed from './../image/bedroom.png'
import tow from './../image/tower.png'
import heat from './../image/heater.png'
import park from './../image/parking.png'
import wif from './../image/wifi.png'
import pool from './../image/pool.png'
import opl from './../image/oopl.png'
import prkin from './../image/parkinn.png'
import goldtlip from './../image/goldentulip.png'

const recommendations = [
    {
        Id: 0,
        img: blu,
        title: 'Radisson Blu',
        location: 'Ikeja, Lagos',
        items: [
            {
                image: bed,
                span:'Bedroom'
            },
            {
                image: tow,
                span:'Tower'
            },
            {
                image: heat,
                span:'Heater'
            }
        ],
        items2: [
            {
                image: park,
                span:'Parking'
            },

            {
                image: wif,
                span:'Wifi'
            },

            {
                image: pool,
                span:'Pool'
            }
        ],
        price: '₦50k',
    },

    {
        Id: 1,
        img: opl,
        title: 'Green Lagacy',
        location: 'Oopl, Abeokuta',
        items: [
            {
                image: bed,
                span:'Bedroom'
            },
            {
                image: tow,
                span:'Tower'
            },
            {
                image: heat,
                span:'Heater'
            }
        ],
        items2: [
            {
                image: park,
                span:'Parking'
            },

            {
                image: wif,
                span:'Wifi'
            },

            {
                image: pool,
                span:'Pool'
            }
        ],
        price: '₦36k',
    },

    {
        Id: 2,
        img: prkin,
        title: 'Park Inn',
        location: 'Kuto, Abeokuta',
        items: [
            {
                image: bed,
                span:'Bedroom'
            },
            {
                image: tow,
                span:'Tower'
            },
            {
                image: heat,
                span:'Heater'
            }
        ],
        items2: [
            {
                image: park,
                span:'Parking'
            },

            {
                image: wif,
                span:'Wifi'
            },

            {
                image: pool,
                span:'Pool'
            }
        ],
        price: '₦76k',
    },

    {
        Id: 3,
        img: goldtlip,
        title: 'Golden Tulip',
        location: 'Ibadan, Abeokuta',
        items: [
            {
                image: bed,
                span:'Bedroom'
            },
            {
                image: tow,
                span:'Tower'
            },
            {
                image: heat,
                span:'Heater'
            }
        ],
        items2: [
            {
                image: park,
                span:'Parking'
            },

            {
                image: wif,
                span:'Wifi'
            },

            {
                image: pool,
                span:'Pool'
            }
        ],
        price: '₦66k',
    },
]

export default recommendations;