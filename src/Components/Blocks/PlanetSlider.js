import { useEffect, useRef, useState } from 'react'
import './PlanetSlider.css'

export default function PlanetSlider({sliderFuncs: {planet, setPlanet}}) {

    let planetList = useRef(null)
    let selected = useRef(null)

    let [hoverMarkerStyle, setHoverMarkerStyle] = useState({})
    let [selectedPlanetMarkerStyle, setSelectedPlanetMarkerStyle] = useState({})

    let planets = useRef([
        {name: 'Moon', selected: false},
        {name: 'Mars', selected: false},
        {name: 'Europa', selected: false},
        {name: 'Titan', selected: false}
    ])

    const handlePositionHoverMarker = e => {
        if (!(e.target instanceof HTMLUListElement)) {
            let width = e.target.closest('li').offsetWidth
            let left = e.target.getBoundingClientRect().x - planetList.current.getBoundingClientRect().x
            setHoverMarkerStyle({ width: width + 'px', left: `calc(${left}px)` })
        }
    }

    const handleSetPlanet = e => {
        setPlanet(e.target.textContent)
        let width = e.target.closest('li').offsetWidth
        let left = e.target.getBoundingClientRect().x - planetList.current.getBoundingClientRect().x
        setSelectedPlanetMarkerStyle({ width: width + 'px', left: `calc(${left}px)` })
    }

    useEffect(() => {
        planets.current = planets.current.map(currPlanet => {
            currPlanet.name === planet
            ? currPlanet.selected = true
            : currPlanet.selected = false
            return {name: currPlanet.name, selected: currPlanet.selected}
            }
        )

    }, [planet])

    return (
        <section className="planet-slider">
            <ul 
                onMouseOver={handlePositionHoverMarker} 
                ref={planetList}
                onClick={handleSetPlanet}>
                {planets.current.map(currPlanet => {
                    return currPlanet.selected
                    ? <li key={currPlanet.name} ref={selected}><button>{currPlanet.name}</button></li>
                    : <li key={currPlanet.name} ><button>{currPlanet.name}</button></li>
                })}
            </ul>
            <div className="hover-marker" style={hoverMarkerStyle}></div>
            <div className="selected-planet-marker" style={selectedPlanetMarkerStyle}></div>
        </section>
    )
}