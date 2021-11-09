import './Destination.css'

import PlanetText from '../Blocks/PlanetText'

import { useState } from 'react'

import jsonData from '../../data.json'
import imgMoon from '../../assets/destination/image-moon.png'
import imgTitan from '../../assets/destination/image-titan.png'
import imgMars from '../../assets/destination/image-mars.png'
import imgEuropa from '../../assets/destination/image-europa.png'


export default function Destinations() {

    const imgs = {
        Moon: imgMoon,
        Titan: imgTitan,
        Mars: imgMars,
        Europa: imgEuropa
    }

    let [planet, setPlanet] = useState('Moon')

    const planetData = jsonData.destinations
        .find(data => data.name === planet)

    return (
        <>
            <h5 className="intro-h5"><span className="span-h5">01 </span>pick your destination</h5>
            <img 
                src={imgs[planet]} 
                alt={planet} 
                className="destination-img"
                />
            <PlanetText data={planetData} planetFuncs={{planet, setPlanet}}/>
        </>
    )
}