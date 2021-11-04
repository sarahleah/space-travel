import './Nav.css'

import logo from '../../assets/shared/logo.svg'
import { useEffect, useRef, useState } from 'react'

export default function Nav({ page }) {

    const navList = useRef(null)
    const home = useRef(null)
    
    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})

    useEffect(() => {
        let left = home.current.getBoundingClientRect().left - navList.current.getBoundingClientRect().x

        setHoverMarkerStyle({ 
            width: '66.36px',
            left: `calc(${left}px + 1rem)` })
    }, [])
    
    // let [pageMarkerStyle, setPageMarkerStyle] = useState({})

    const handlePositionHoverMarker = (e) => {
        if (!(e.target instanceof HTMLUListElement)) {
            let width = e.target.closest('li').offsetWidth
            let left = e.target.getBoundingClientRect().x - navList.current.getBoundingClientRect().x
            setHoverMarkerStyle({ width: width + 'px', left: `calc(${left}px + 1rem)` })
        }
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
                    <li><div ref={home}><strong>00</strong> Home</div></li>
                    <li><div><strong>01</strong> Destination</div></li>
                    <li><div><strong>02</strong> Crew</div></li>
                    <li><div><strong>03</strong> Technology</div></li>
                </ul>
                <div 
                    className="page-marker"
                    ></div>
                <div 
                    className="hover-marker"
                    style={hoverMarkerStyle}>
                </div>
            </div>
        </nav>
    )
}