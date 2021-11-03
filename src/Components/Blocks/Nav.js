import './Nav.css'

import logo from '../../assets/shared/logo.svg'
import { useEffect, useRef, useState } from 'react'

export default function Nav({ page }) {

    const navList = useRef(null)
    const home = useRef(null)
    const crew = useRef(null)
    const technology = useRef(null)
    
    let [firstRender, setFirstRender] = useState(true)
    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
            let left = home.current.getBoundingClientRect().left - navList.current.getBoundingClientRect().x
            console.log(left)
        } else {
            let left = home.current.getBoundingClientRect().left - navList.current.getBoundingClientRect().x
            console.log(left)
    
            setHoverMarkerStyle({ 
                width: '66.36px',
                left: `calc(${left}px + 1rem)` })
        }
    }, [firstRender])
    
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