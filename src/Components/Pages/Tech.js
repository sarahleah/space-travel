import './Tech.css'

import Nav from "../Blocks/Nav";
import { useState } from 'react';
import { technology } from '../../data.json'

import TechText from '../Blocks/TechText'
import TechSelect from '../Blocks/TechSelect';

import launchImg from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import capsuleImg from '../../assets/technology/image-space-capsule-portrait.jpg'
import portImg from '../../assets/technology/image-spaceport-portrait.jpg'

const imgs = [launchImg, capsuleImg, portImg]

export default function Tech() {

    const [tech, setTech] = useState(0)

    return (
        <div className="tech-wrap">
            <section className="tech">
                <Nav />
                <TechSelect funcs={[tech, setTech]}/>
                <h5><span className="span-h5">01 </span>pick your destination</h5>
                <TechText data={technology[tech]}/>
                <img className="tech-img" src={imgs[tech]} alt="" />
            </section>
            <div className="background"></div>
        </div>
    )
}