import './Nav.css'

import logo from '../../assets/shared/logo.svg'
import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

export default function Nav({ funcs: [page, setPage] }) {

    const navList = useRef(null)
    
    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})
    let [pageMarkerStyle, setPageMarkerStyle] = useState({})
    
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

    let links = useRef([
        {
            path: '/',
            num: '00',
            text: 'Home',
            selected: false
        },
        {
            path: '/destinations',
            num: '01',
            text: 'Destinations',
            selected: false
        },
        {
            path: '/crew',
            num: '02',
            text: 'Crew',
            selected: false
        },
        {
            path: '/technology',
            num: '03',
            text: 'Technology',
            selected: false
        },
    ])

    links.current = links.current.map(link => {
        return (
            link.text.toLowerCase() === page
            ? {...link, selected: true}
            : {...link, selected: false}
            )
    })

    useEffect(() => {
        let currPage = document.querySelector('.curr-page')
        let left = currPage.getBoundingClientRect().left - navList.current.getBoundingClientRect().x
        let width = currPage.offsetWidth

        setPageMarkerStyle({ 
            width,
            left: `calc(${left}px + 1rem)` 
        })
    }, [page])

    return (
        <nav>
            <img src={logo} alt="logo" className="nav-logo"/>
            <div className="line"></div>
            <div className="right">
                <ul 
                    onMouseOver={handlePositionHoverMarker}
                    ref={navList}
                    onClick={handleSetPage}>
                    {links.current.map(({ path, num, text, selected }) => {
                        return (
                            <li key={path} className={selected ? 'curr-page' : ''}>
                                <Link to={path}>
                                    <div><strong>{num}</strong> {text}</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div 
                    className="page-marker"
                    style={pageMarkerStyle}
                    ></div>
                <div 
                    className="hover-marker"
                    style={hoverMarkerStyle}>
                </div>
            </div>
        </nav>
    )
}