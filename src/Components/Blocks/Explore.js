import { Link } from 'react-router-dom'
import './Explore.css'

export default function Explore({setPage}) {
    return (
        <button className="explore-btn">
            <h4 onClick={() => setPage('destination')}><Link to="/destinations">EXPLORE</Link></h4>
        </button>
    )
}