import './PlanetText.css'

import PlanetSlider from './PlanetSlider'

export default function PlanetText({ data, planetFuncs: {planet, setPlanet} }) {

    return (
        <section className="planet-text">
            <PlanetSlider sliderFuncs={{planet, setPlanet}}/>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <div className="stats">
                <div className="stat">
                    <p className="sh2">Avg. distance</p>
                    <h4>{data.distance}</h4>
                </div>
                <div className="stat">
                    <p className="sh2">Est. travel time</p>
                    <h4>{data.travel}</h4>
                </div>
            </div>
        </section>
    )
}