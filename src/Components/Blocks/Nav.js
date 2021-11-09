import './Nav.css'

import logo from '../../assets/shared/logo.svg'
import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

export default function Nav({ funcs: [page, setPage] }) {

    const navList = useRef(null)
    const home = useRef(null)
    
    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})

    useEffect(() => {
        let left = home.current.getBoundingClientRect().left - navList.current.getBoundingClientRect().x

        setHoverMarkerStyle({ 
            width: '66.36px',
            left: `calc(${left}px + 1rem)` })
    }, [])
    
    const handlePositionHoverMarker = e => {
        if (!(e.target instanceof HTMLUListElement)) {
            let width = e.target.closest('li').offsetWidth
            let left = e.target.getBoundingClientRect().x - navList.current.getBoundingClientRect().x
            setHoverMarkerStyle({ width: width + 'px', left: `calc(${left}px + 1rem)` })
        }
    }

    const handleSetPage = e => {
        if (!(e.target instanceof HTMLUListElement)) {
            let newPage = e.target.closest('li')
                .textContent
                .toLowerCase()
                .slice(3)
            setPage(newPage)
        }
    }

    return (
        <nav>
            <img src={logo} alt="logo" className="nav-logo"/>
            <div className="line"></div>
            <div className="right">
                <ul 
                    onMouseOver={handlePositionHoverMarker}
                    ref={navList}
                    onClick={handleSetPage}>
                    <li><Link to='/'><div ref={home}><strong>00</strong> Home</div></Link></li>
                    <li><Link to='/destinations'><div><strong>01</strong> Destination</div></Link></li>
                    <li><Link to='/crew'><div><strong>02</strong> Crew</div></Link></li>
                    <li><Link to='/technology'><div><strong>03</strong> Technology</div></Link></li>
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