import './Nav.css'

import logo from '../../assets/shared/logo.svg'
import { useRef, useState } from 'react'

export default function Nav({ page }) {

    const navList = useRef(null)
    const home = useRef(null)
    const destination = useRef(null)
    const crew = useRef(null)
    const technology = useRef(null)
    
    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})
    // let [pageMarkerStyle, setPageMarkerStyle] = useState({})

    const handlePositionHoverMarker = (e) => {
        let width = e.target.offsetWidth
        let left = Math.floor(e.clientX - navList.current.getBoundingClientRect().left)
        setHoverMarkerStyle({ width: width + 'px', left: left + 'px' })
        // console.log(navList.current)
    }

    return (
        <nav>
            <img src={logo} alt="logo" className="nav-logo"/>
            <div className="line"></div>
            <div className="right">
                <ul 
                    onMouseOver={handlePositionHoverMarker}
                    ref={navList}>
                    <li ref={home}><strong>00 </strong>Home</li>
                    <li ref={destination}><strong>01 </strong>Destination</li>
                    <li ref={crew}><strong>02 </strong>Crew</li>
                    <li ref={technology}><strong>03 </strong>Technology</li>
                </ul>
                <div 
                    className="page-marker"
                    ></div>
                <div 
                    className="hover-marker"
                    style={hoverMarkerStyle}></div>
            </div>
        </nav>
    )
}