import './Nav.css'

import logo from '../../assets/shared/logo.svg'
import { useRef, useState } from 'react'

export default function Nav() {

    const navList = useRef(null)
    
    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})

    const handlePositionHoverMarker = (e) => {
        let width = e.target.offsetWidth
        let left = Math.floor(e.clientX - navList.current.getBoundingClientRect().left)
        setHoverMarkerStyle({ width: width + 'px', left: left + 'px' })
        // console.log(navList.current)
    }

    return (
        <nav>
            <img src={logo} alt="logo" />
            <div className="line"></div>
            <div className="right">
                <ul 
                    onMouseOver={handlePositionHoverMarker}
                    ref={navList}>
                    <li><span className="bold">00</span>Home</li>
                    <li><span className="bold">01</span>Destination</li>
                    <li><span className="bold">02</span>Crew</li>
                    <li><span className="bold">03</span>Technology</li>
                </ul>
                <div className="page-marker"></div>
                <div 
                    className="hover-marker"
                    style={hoverMarkerStyle}></div>
            </div>
        </nav>
    )
}