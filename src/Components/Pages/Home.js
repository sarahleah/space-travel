import './Home.css'

import Explore from '../Blocks/Explore'
import TitleText from '../Blocks/TitleText'

export default function Home({ setPage }) {
    return (
        <>
            <TitleText />
            <Explore setPage={setPage} />
        </>
    )
}