import './Home.css'

import Explore from '../Blocks/Explore'
import TitleText from '../Blocks/TitleText'

export default function Home({ setPage }) {
    return (
        <div className="grid-wrap">
            <TitleText />
            <Explore setPage={setPage} />
        </div>
    )
}