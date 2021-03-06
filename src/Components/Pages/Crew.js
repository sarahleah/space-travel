import './Crew.css'

import CrewText from '../Blocks/CrewText'
import CrewSlider from '../Blocks/CrewSlider'
import { useState } from 'react'
import { crew } from '../../data.json'

import douglas from '../../assets/crew/image-douglas-hurley.webp'
import anousheh from '../../assets/crew/image-anousheh-ansari.webp'
import mark from '../../assets/crew/image-mark-shuttleworth.webp'
import victor from '../../assets/crew/image-victor-glover.webp'

export default function Crew() {

    let imgs = [douglas, mark, victor, anousheh]

    const [member, setMember] = useState(0)

    return (
        <div className="grid-wrap">
            <h5 className="intro-h5"><span className="span-h5">01 </span>Meet your crew</h5>
            <CrewText data={crew[member]}/>
            <img className="member-img" src={imgs[member]} alt="" />
            <CrewSlider funcs={[member, setMember]}/>
        </div>
    )
}