import './Destination.css'
import Nav from '../Blocks/Nav'
import { useState } from 'react'
import jsonData from '../../data.json'

export default function Destinations() {

    let [planet, setPlanet] = useState('Moon')

    const planetData = jsonData.destinations
        .find(data => data.name === planet)

    return (
        <section className="destinations">
            <Nav />
            <h5><span>01 </span>pick your destination</h5>
            <img src={planetData.images.png} alt={planet} />
        </section>
    )
}